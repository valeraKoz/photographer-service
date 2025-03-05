import Image from "next/image";
import {YANDEX_CONFIG_PUBLIC} from "@constants/settings";

export const PhotoCardImage = (
    {originalPhotoKey, title}: {originalPhotoKey: string; title: string}
) => {
    return (
        <div className='absolute w-full h-full top-0 right-0 flex items-center justify-center'>
            <Image
                className='object-contain pointer-events-none'
                fill
                src={`${YANDEX_CONFIG_PUBLIC.STORAGE}/${originalPhotoKey}`}
                alt={title}
            />
        </div>
    )
}