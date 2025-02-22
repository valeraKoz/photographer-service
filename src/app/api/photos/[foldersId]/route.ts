import {NextRequest, NextResponse} from "next/server";
import prisma from "@myPrisma/prisma-client";
import {type Photo, Prisma} from "@prisma/client"


export const GET = async (
    req: Request,
    {params}: {params: Promise<{foldersId: string}>}
) => {
    const foldersId = +(await params).foldersId

    const photos = await prisma.photo.findMany({
        where:{
            foldersId
        }
    })

    if(photos.length > 0){
        return NextResponse.json(photos)
    } else {
        return NextResponse.json({
            message: `Photo in folder with id: ${foldersId} - not found`,
            data: null
        })
    }
}

export const POST = async (
    req: NextRequest,
    {params}: {params: Promise<{foldersId: string}>}
)=>{
    const foldersId = +(await params).foldersId;
    const photos = (await req.json()).map((photo:Photo)=> ({
        ...photo,
        foldersId
    }))
    console.log(photos);


    try{
        const response = await prisma.photo.createMany({
            data: photos
        })
        return NextResponse.json({
            response
        })
    }
    catch (error){
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            return NextResponse.json({
                error,
                code: error.code,
                target: error?.meta?.target
            })
        } else {
            return NextResponse.json({
                error
            })
        }
    }

}


