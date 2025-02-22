import {YANDEX_OAUTH} from "@constants/settings";
import axios, {AxiosResponse, AxiosRequestConfig} from "axios";
import {YandexTokenRequest, YandexTokenResponse} from "./types";



export async function getYandexAccessToken({ code }: YandexTokenRequest): Promise<YandexTokenResponse> {
    try {
        // Кодирование client_id и client_secret для авторизации
        const basicAuth = btoa(`${YANDEX_OAUTH.CLIENT_ID}:${YANDEX_OAUTH.CLIENT_SECRET}`);

        // Настройка запроса
        const config: AxiosRequestConfig = {
            method: 'post',
            url: `${YANDEX_OAUTH.TOKEN_URL}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${basicAuth}`,
            },
            data: {
                grant_type: 'authorization_code',
                code,
                client_id: YANDEX_OAUTH.CLIENT_ID,
                client_secret: YANDEX_OAUTH.CLIENT_SECRET,
            },
        };

        // Выполнение запроса
        const response: AxiosResponse<YandexTokenResponse> = await axios(config);

        return response.data;
    } catch (error) {
        console.error('Error obtaining Yandex token:', error);
        throw error;
    }

}



/*
POST /token HTTP/1.1
Host: https://oauth.yandex.ru/
Content-type: application/x-www-form-urlencoded
Content-Length: <длина тела запроса>
[Authorization: Basic <закодированная методом base64 строка `client_id:client_secret`>]

   grant_type=authorization_code
 & code=<код подтверждения>
[& client_id=<идентификатор приложения>]
[& client_secret=<секретный ключ>]
 */