
import {YANDEX_OAUTH} from "@constants/settings";
import {NextResponse} from "next/server";

export  const GET = ()=> {
    const authUrl = new URL(YANDEX_OAUTH.AUTH_URL);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('client_id', YANDEX_OAUTH.CLIENT_ID);
    authUrl.searchParams.set('redirect_uri', YANDEX_OAUTH.REDIRECT_URI);

    return NextResponse.redirect(authUrl.toString())
}


/*
Чтобы пользователь подтвердил доступ к своим данным, настройте в приложении переход на страницу Яндекс OAuth.
Для этого используйте запрос для получения кода подтверждения из URL.
Когда пользователь разрешает приложению доступ к своим данным,
Яндекс OAuth перенаправляет его в приложение на адрес, указанный в поле Redirect URI при регистрации приложения.


Формат запроса для инициализации пользователя
https://oauth.yandex.ru/authorize?response_type=code
 & client_id=<идентификатор приложения>
[& redirect_uri=<адрес перенаправления>]
 */