import {S3Client, ListObjectsV2Command} from "@aws-sdk/client-s3";

import type { _Object } from "@aws-sdk/client-s3";


import type {DefaultParams} from "@/service/S3Client/types/S3Client";


/**
 * Создание объекта для работы с S3 хранилищем
 */
class YandexS3Client {
    /**
     *
     * @param {Object} params Параметры соединения, 4 обязательных параметра.
     * @param {Object} params.auth Обязательно. Данные для доступа от сервисного аккаунта
     * @param {string} params.auth.accessKeyId Обязательно. Идентификатор ключа сервисного аккаунта
     * @param {string} params.auth.secretAccessKey Обязательно. Cекретный ключ сервисного аккаунта
     * @param {string} params.Bucket Обязательно. ID бакета
     *
     * @param {string=} params.endpointUrl Необязательно. Ссылка на S3 сервер, например, на storage.yandexcloud.net
     * @param {string=} params.region Необязательно. Регион загрузки
     * @param {Object=} params.httpOptions Необязательно. Установки http-запроса
     * @param {boolean=} params.debug Необязательно. Вывод дополнительной информации в консоль
     *
     */

    public default_params: DefaultParams = {
        endpointUrl: '',
        auth: {
            accessKeyId: '',
            secretAccessKey: '',
        },
        region: 'us-east-1',
        Bucket: '',
        debug: false,
    };

    public s3Client: S3Client;
    public debug: boolean | undefined;
    public Bucket: string;

    constructor(params: DefaultParams) {
        const newParams: DefaultParams = {...this.default_params, ...params};

        if (params.endpointUrl) newParams.endpointUrl = params.endpointUrl;

        this.s3Client = new S3Client({
            endpoint: newParams.endpointUrl,
            region: newParams.region,
            credentials: {
                accessKeyId: newParams.auth.accessKeyId,
                secretAccessKey: newParams.auth.secretAccessKey,
            }
        });

        this.debug = newParams.debug;
        this.Bucket = params.Bucket;
    }

    private _log(...args: unknown[]) {
        return console.log(`[${new Date().toUTCString()}] `, ...args);
    }

    /**
     * Получение списка директорий и папок
     * @param {string=} route Необязательно. Путь к папке, которую смотрим
     *
     * @returns {Promise<_Object[] | undefined | false >} Результат просмотра
     */
    public async GetList(route: string): Promise<_Object[] | undefined | false> {
        if (!route) route = '/';
        if (route === './') route = '/';
        if (route) route += route.slice(-1) !== '/' ? '/' : '';
        if (route[0] === '.') route = route.slice(1);
        if (route[0] === '/') route = route.slice(1);

        const { s3Client } = this;
        const { Bucket } = this;
        const params = {
            Bucket,
            Prefix: route,
            Delimiter: '/',
        };

        const { debug } = this;
        const debugObject = 'listObjectsV2';
        if (debug) this._log('S3', debugObject, 'started');
        if (debug) this._log('S3', debugObject, params);

        try {
            const s3Promise = await new Promise<_Object[] | undefined>((resolve, reject) => {
                const command = new ListObjectsV2Command(params);
                s3Client.send(command)
                    .then(({Contents}) => resolve(Contents))
                    .catch(err => reject(err));
            });
            if (debug) this._log('S3', debugObject, 'done:', s3Promise);
            return s3Promise;
        } catch (error) {
            if (debug) this._log('S3', debugObject, 'error:', error);
            return false
        }
    }
}

export default YandexS3Client;