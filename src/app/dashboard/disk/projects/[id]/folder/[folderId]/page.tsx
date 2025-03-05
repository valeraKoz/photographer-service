'use client'


import {useFolderId} from "@/app/dashboard/disk/projects/[id]/folder/[folderId]/FolderProvider";
import {UploadPhotoButton} from "@components/upload-photo-button/UploadPhotoButton";
import {PhotoGallery} from "@components/photo-gallery/PhotoGallery";

const FolderPage = () =>{
    const {folderId} = useFolderId()

    return (
        <div className='w-full flex flex-col flex-grow gap-10'>
            <UploadPhotoButton/>
            <PhotoGallery folderId={+folderId}/>
        </div>
    )
}

export default FolderPage;