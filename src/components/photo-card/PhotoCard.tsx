import {IPhoto} from "@myPrisma/types";
import {useState} from "react";
import {PhotoCardCheckBox} from "@components/photo-card/PhotoCardCheckBox";
import {PhotoCardTitle} from "@components/photo-card/PhotoCardTitle";
import {PhotoCardImage} from "@components/photo-card/PhotoCardImage";
import {PhotoCardControls} from "@components/photo-card/PhotoCardControls";

export const PhotoCard = (
    {photo}:{photo:IPhoto}
) => {
    const {originalPhotoKey, title, id} = photo;
    const [isChecked, setChecked] = useState(false);

    const mediaWidth = '2xl:w-[calc(16.3%-50px)] xl:w-[calc(20%-40px)] lg:w-[calc(25%-40px)] md:w-[calc(34%-40px)] m-7'

    return(
        <div className={`photo-card ${mediaWidth} ${isChecked ? 'border-2 border-blue-500' : null} group/photo-card aspect-square cursor-pointer rounded-md`}>
            <div className='relative w-full h-full'>
                <PhotoCardControls photoId={id!} className={'group-hover/photo-card:opacity-100'}/>
                <PhotoCardImage originalPhotoKey={originalPhotoKey} title={title}/>
                <PhotoCardTitle title={title}/>
                <PhotoCardCheckBox isChecked={isChecked} setChecked={setChecked} />
            </div>
        </div>
    )
}