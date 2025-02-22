type DefaultParams = {
    /** Необязательно. Ссылка на S3 сервер, например, на storage.yandexcloud.net */
    endpointUrl?: string;
    /**
     * Необязательно. Ссылка на S3 сервер, например, на storage.yandexcloud.net
     * @deprecated Удалено в версиях > 2.0.0
     * @see Используйте endpointUrl
     */
    endpoint_url?: string;
    /** Обязательно. Данные для доступа от сервисного аккаунта */
    auth: {
        /** Обязательно. Идентификатор ключа сервисного аккаунта */
        accessKeyId: string;
        /** Обязательно. Cекретный ключ сервисного аккаунта */
        secretAccessKey: string;
    },
    /** Необязательно. Регион загрузки */
    region?: string;
    /** Необязательно. Установки http-запроса */
    httpOptions?: {
        timeout?: number;
        connectTimeout?: number;
    },
    /** Обязательно. ID бакета */
    Bucket: string;
    /** Необязательно. Вывод дополнительной информации в консоль */
    debug?: boolean;
}


export { DownloadedFile, UploadFile, DefaultParams, DefaultIgnoreList };