import {NextRequest, NextResponse} from "next/server";

export interface YandexTokenRequest {
    code: string;
}

export interface YandexTokenResponse {
    access_token: string;
}

export interface YandexUserInformation {
    "id": string,
    "login": string,
    "client_id": string,
    "display_name": string,
    "real_name": string,
    "first_name": string,
    "last_name": string,
    "sex": string,
    "default_email": string,
    "emails": [
        string
    ],
    "birthday": string,
    "default_avatar_id": string,
    "is_avatar_empty": boolean,
    "default_phone": {
        "id": number,
        "number": string
    },
    "psuid": string
}

export interface YandexAddCookies {
    sessionToken: string,
    expiresAt: Date
}