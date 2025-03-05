import {IPhoto} from "@myPrisma/types";
import {PhotoCard} from "@components/photo-card/PhotoCard";

export const PhotoGalleryComponent = (
    {photos}: {photos: IPhoto[]}
) => {
    return (
            <div className="photo-gallery-component flex flex-wrap justify-between w-full">
                {
                    photos.map((photo, index) => (
                        <PhotoCard photo={photo} key={index}/>
                    ))
                }
            </div>
    )
}