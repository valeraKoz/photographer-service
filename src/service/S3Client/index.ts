import {S3Client, ListObjectsV2Command, PutObjectCommand, S3ServiceException} from "@aws-sdk/client-s3";

import type { _Object } from "@aws-sdk/client-s3";


import type {DefaultParams} from "@/service/S3Client/types/S3Client";
import {s3Client} from "@service/S3Client/s3Client_init";


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

    public async PostObject(route: string, file: Buffer<ArrayBufferLike>) {
        const uploadParams = {
            Bucket: this.Bucket,
            Key: route,
            Body: file,
        }
        try {
            const s3Response = await this.s3Client.send(new PutObjectCommand(uploadParams))
            console.log(s3Response)
        } catch (caught) {
            if (
                caught instanceof S3ServiceException &&
                caught.name === "EntityTooLarge"
            ) {
                console.error(
                    `Error from S3 while uploading object to ${this.Bucket}. \
The object was too large. To upload objects larger than 5GB, use the S3 console (160GB max) \
or the multipart upload API (5TB max).`,
                );
            } else if (caught instanceof S3ServiceException) {
                console.error(
                    `Error from S3 while uploading object to ${this.Bucket}.  ${caught.name}: ${caught.message}`,
                );
            } else {
                throw caught;
            }
        }
    }
}

export default YandexS3Client;