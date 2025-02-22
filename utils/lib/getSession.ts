import {cookies} from "next/headers";
import {SESSION_CONFIG} from "@constants/settings";
import prisma from "@myPrisma/prisma-client";

export const getSession = async ()=> {
    const cookiesStore = await cookies();
    const token = cookiesStore.get(SESSION_CONFIG.COOKIE_NAME)?.value;

    if (!token) return null

    const session = await prisma.session.findUnique({
        where: {token},
        include: {
            user: true
        }
    })

    if (!session || session.expiresAt < new Date()){
        return null
    }

    return session.user
}