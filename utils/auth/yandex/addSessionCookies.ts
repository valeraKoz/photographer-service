import {YandexAddCookies} from "@utils/auth/yandex/types";
import {cookies} from 'next/headers'
import {SESSION_CONFIG} from "@constants/settings";

export const addSessionCookies = async ({sessionToken, expiresAt}: YandexAddCookies)=> {
    // Установка cookie
    const cookiesStore = await cookies()
    cookiesStore.set(SESSION_CONFIG.COOKIE_NAME, sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: expiresAt
    });
}