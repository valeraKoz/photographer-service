import {PhotoInFolderNotFound} from "@components/photo-in-folder-not-found/PhotoInFolderNotFound";
import {useGetPhotoFromFolder} from "@lib/db/hooks";
import {PhotoGalleryComponent} from "@components/photo-gallery/PhotoGalleryComponent";


export const PhotoGallery = ({folderId}:{folderId:number}) =>{
    const {data, isLoading,isSuccess, isError, error} = useGetPhotoFromFolder(folderId)

    return (
        <>
            {
                isLoading ? 'Загрузка...' : (
                    isError ? error.message : (
                        isSuccess && data?.length ? <PhotoGalleryComponent photos={data}/>: <PhotoInFolderNotFound/>
                    )
                )
            }
        </>
    )
}