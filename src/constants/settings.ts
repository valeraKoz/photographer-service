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
    REGION: 'ru-central1',
    ENDPOINT: 'https://storage.yandexcloud.net',
    BUCKET_NAME: 'ph-kattrina',
    ACCESS_KEY_ID: 'YCAJELb4m_DotwjlEzO4Wk9Qa',
    SECRET_ACCESS_KEY: 'YCNoVfNmRH9j-_RZP8z3F6ZiS3cf3Yit8gdbHk4u'
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