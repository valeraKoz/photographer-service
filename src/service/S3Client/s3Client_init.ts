import YandexS3Client from "@service/S3Client";
import {DefaultParams} from "@service/S3Client/types/S3Client";

import {YANDEX_CONFIG} from "@constants/settings";

const params : DefaultParams = {
    endpointUrl: YANDEX_CONFIG.ENDPOINT,
    region: YANDEX_CONFIG.REGION,
    auth: {
        accessKeyId: YANDEX_CONFIG.ACCESS_KEY_ID,
        secretAccessKey: YANDEX_CONFIG.SECRET_ACCESS_KEY
    },
    Bucket: YANDEX_CONFIG.BUCKET_NAME
}

export const s3Client = new YandexS3Client(params);