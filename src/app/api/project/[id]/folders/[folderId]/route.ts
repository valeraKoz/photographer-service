import {NextResponse} from "next/server";
import prisma from "@myPrisma/prisma-client";


// Отдает папку с проекта [id] и [foldersId]
export const GET = async (
    req: Request,
    {params}: {params: Promise<{id: string, folderId:string}>}
)=> {
    const projectId = +(await params).id
    const id = +(await params).folderId

    const prismaResponse = await prisma.folders.findUnique({
        where:{
            id,
            projectId,
        }
    })
    return NextResponse.json(prismaResponse);

}

// Удаляет папку с [foldersId] и удаляет все фото которые принадлежат этой папке
export const DELETE = async (
    req: Request,
    {params}: {params: Promise<{folderId:string}>}
)=>{
    const id = +(await params).folderId


    const prismaResponse = await prisma.folders.delete({
        where:{
            id
        }
    })
    return NextResponse.json(prismaResponse)
}