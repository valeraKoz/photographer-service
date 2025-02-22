import {NextRequest, NextResponse} from "next/server";
import prisma from "@myPrisma/prisma-client";
import {SESSION_CONFIG} from "@constants/settings";
import {APP_PATH} from "@constants/urls";


export default async function middleware(req: NextRequest){
    // достаем из куки сессионный токен
    const session_token = `${req.cookies.get(SESSION_CONFIG.COOKIE_NAME)?.value}`
    const pathname = req.nextUrl.pathname;

    // Посмотреть в Session токен и вернуть данные + данные юзера с этим сессионным токеном
    const userSession = await prisma.session.findUnique({
        where:{ token: session_token },
        include: { user: true }
    })

    if(!userSession && pathname.startsWith(APP_PATH.dashboard.main)) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    return NextResponse.next()
}


export const config = {
    matcher: [
        `/dashboard/:path*`,
        `/dashboard/disk/:path*`,
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         * - public (/public files)
         */
        '/((?!api|_next/static|_next/image|public|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}