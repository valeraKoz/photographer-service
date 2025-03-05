import {NextRequest, NextResponse} from "next/server";
import prisma from "@myPrisma/prisma-client";
import {DB_QueryKeys} from "@lib/db/hooks";
import {s3Client} from "@service/S3Client/s3Client_init";
import {IPhoto} from "@myPrisma/types";


export const GET = async (
    req: Request,
    {params}: {params: Promise<{foldersId: string}>}
) => {
    const foldersId = +(await params).foldersId

    const prismaResponse = await prisma.folders.findUnique({
        where:{
            id: foldersId
        },
        include:{
            photos: true
        }
    })
    // если нет фото в папке отправляет пустой массив
    // если нет проекта отправляет пустой массив
    return NextResponse.json(prismaResponse?.photos || [])
}

export const POST = async (
    req: NextRequest,
    {params}: {params: Promise<{foldersId: string}>}
)=>{

    const fileFormData = await req.formData();
    const file = fileFormData.get(DB_QueryKeys.photos) as File;
    const fileInfo = JSON.parse(fileFormData.get('info') as string);

    if (!file) return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    try{
        if(!buffer || typeof fileInfo.originalPhotoKey !== 'string') {
            throw new Error("Нет файла или адреса в бакет")}
        await s3Client.PostObject(fileInfo.originalPhotoKey, buffer)
        const response = await prisma.photo.create({
            data: {
                ...fileInfo,
                compressedSize: 0,
                compressedPhotoKey: ''
            }
        })
        console.log(response)
    }catch (e){
        console.log(e)
    }

    return NextResponse.json({message: 'okay'})
}


