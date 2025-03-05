import {UploadPhotoButton} from "@components/upload-photo-button/UploadPhotoButton";

export const PhotoInFolderNotFound = () => {
    return (
        <div className='flex flex-grow items-center justify-center'>
            <div className='flex flex-col items-center'>
                <p className='text-2xl'>В этой папке пока нет файлов</p>
                <p>Загрузите в нее фотографии</p>
                <UploadPhotoButton/>
            </div>
        </div>
    )
}