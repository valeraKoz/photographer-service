import {User} from "@prisma/client";
import crypto from "crypto"
import {SESSION_CONFIG} from "@constants/settings";
import prisma from "@myPrisma/prisma-client";
import {addSessionCookies} from "@utils/auth/yandex/addSessionCookies";

export const createUserSession = async (savedUser: User)=>{
    // Создание сессии
    const sessionToken = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + SESSION_CONFIG.MAX_AGE * 1000);

    await prisma.session.create({
        data: {
            token: sessionToken,
            userId: savedUser.id,
            expiresAt
        }
    });
    await addSessionCookies({sessionToken, expiresAt})

    return {sessionToken,expiresAt};
}