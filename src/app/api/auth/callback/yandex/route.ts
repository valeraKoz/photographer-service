import {NextRequest, NextResponse} from "next/server";
import {getYandexAccessToken} from "@utils/auth/yandex/getYandexAccessToken";
import {YandexTokenResponse} from "@utils/auth/yandex/types";
import {getUserInformation} from "@utils/auth/yandex/getUserInformation";
import {saveAndUpdateUser} from "utils/auth/yandex/saveAndUpdateUser";
import {createUserSession} from "@utils/auth/yandex/createUserSession";
import {BASE_URL} from "@constants/urls";






export const GET = async (req: NextRequest, res: NextResponse) => {
    const {searchParams} = new URL(req.url);
    const code = searchParams.get('code');


    // Если код не получен
    if (!code) return new NextResponse('Authorization code not found', { status: 400 })

    try{
        const tokenResponse: YandexTokenResponse = await getYandexAccessToken({code})
        const accessToken = tokenResponse.access_token;
        const userInformation = await getUserInformation(accessToken);
        const savedUser = await saveAndUpdateUser(userInformation);
        const userSession = await createUserSession(savedUser);


        if(userSession) return NextResponse.redirect(BASE_URL);
    }
    catch (error) {
        console.log("ОШИБОЧКА___", error)
        return NextResponse.json({
            status: 500,
            message: 'Authentication failed',
            error
        })
    }

}


