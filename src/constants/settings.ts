export const DASHBOARD_CONFIG = {
    ICON_SIZE: 18,
    NAVBAR:{
        PAGES: {
            URL: '/dashboard/pages',
            TITLE: 'Страницы'
        },
        DISK: {
            URL: '/dashboard/disk',
            TITLE: 'Диск'
        },
        CARD: {
            URL: '/dashboard/card',
            TITLE: 'Визитка'
        },
    }
}

export const YANDEX_CONFIG = {
    REGION: process.env.YANDEX_S3_REGION as string,
    ENDPOINT: process.env.YANDEX_S3_ENDPOINT as string,
    BUCKET_NAME: process.env.YANDEX_S3_BUCKET_NAME as string,
    ACCESS_KEY_ID: process.env.YANDEX_S3_ACCESS_KEY_ID as string,
    SECRET_ACCESS_KEY: process.env.YANDEX_S3_SECRET_ACCESS_KEY as string,
}
export const YANDEX_CONFIG_PUBLIC = {
    STORAGE: process.env.NEXT_PUBLIC_YANDEX_S3_STORAGE as string,
}

export const YANDEX_OAUTH = {
    CLIENT_ID: process.env.YANDEX_CLIENT_ID || '',
    CLIENT_SECRET: process.env.YANDEX_CLIENT_SECRET || '',
    REDIRECT_URI: process.env.YANDEX_REDIRECT_URI || '',
    AUTH_URL: process.env.YANDEX_AUTH_URL || '',
    TOKEN_URL: process.env.YANDEX_TOKEN_URL || '',
    USER_INFO_URL: process.env.YANDEX_USER_INFO_URL || '',
}

export const SESSION_CONFIG = {
    COOKIE_NAME: 'session_token',
    MAX_AGE: 60 * 60 * 24 * 7, //1 неделя
    SECRET: process.env.SESSION_SECRET
}