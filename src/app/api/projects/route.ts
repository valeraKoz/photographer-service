import {NextRequest, NextResponse} from "next/server";
import prisma from "@myPrisma/prisma-client"





export const GET = async ()=> {
    const project = await prisma.project.findMany()
    return NextResponse.json(project)
}

export const POST = async (
    req: NextRequest,
)=> {
    const data = await req.json();
    const createProjectResponse = await prisma.project.create({
        data: {
            title: data.title,
            photoshootDate: new Date(data.photoshootDate),
            creationDate: new Date(data.creationDate),
            autoDeleteDate: new Date(data.autoDeleteDate),
            uniqueLink: data.uniqueLink
        }
    });
    return NextResponse.json(createProjectResponse);
}