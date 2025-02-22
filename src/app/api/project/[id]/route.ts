import {NextRequest, NextResponse} from "next/server";
import prisma from "@myPrisma/prisma-client";

// если не находит проект в базе данных - возвращает null
export const GET = async (
    req: Request,
    {params}: {params: Promise<{id: string}>
    })=> {
    const id = +(await params).id;

    const prismaResponse = await prisma.project.findUnique({
        where:{
            id
        }
    });
    return NextResponse.json(prismaResponse)
}

// если не находит проект в базе данных - ошибка 500
export const DELETE = async (
    req: NextRequest,
    {params}: {params: Promise<{id: string}>}
    ) => {
    const id = +(await params).id;


    const prismaResponse = await prisma.project.delete({
        where:{
            id
        }
    })
    return NextResponse.json(prismaResponse)

}