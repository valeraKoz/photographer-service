import {NextRequest, NextResponse} from "next/server";
import prisma from "@myPrisma/prisma-client";

export const DELETE = async (
    req: NextRequest
)=> {
    const deletedPhotos = await req.json()
    let deletedPhotosId;

    if (Array.isArray(deletedPhotos)) {
        deletedPhotosId = deletedPhotos.map((photo) => photo.id);

    } else {
        deletedPhotosId = [deletedPhotos.id];
    }

    const response = await prisma.photo.deleteMany({
        where:{
            id: {
                in: deletedPhotosId
            }
        }
    })
    return NextResponse.json({response})
}