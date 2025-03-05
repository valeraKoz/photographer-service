import {NextResponse} from "next/server";
import prisma from "@myPrisma/prisma-client";
import {IFolders} from "@myPrisma/types";
import {createFolderType} from "@lib/db/types";

/**
 * По запросу
 * <pre>
 *     /api/project/[id]/folders
 * </pre>
 * Выдает данные по папкам в проекте
 */
// возвращает пустой массив даже если нет проекта в базе
export const GET = async (
    req: Request,
    {params}: {params: Promise<{id: string}>}
)=> {
    const projectId = +(await params).id

    const folders = await prisma.folders.findMany({
        where:{
            projectId
        }
    })
    return NextResponse.json(folders);
}

/**
 *
 * По запросу:
 * <pre>
 *     /api/project/[id]/folders
 * </pre>
 * Создает новую папку в проекте с [id]
 */
// если не находит проект, то выдает ошибку 500
export const POST = async (req: Request)=>{
    const data: IFolders = await req.json();
    const prismaResponse = await prisma.folders.create({
        data,
    })
    return NextResponse.json(prismaResponse);
}
