import {IoCheckmark} from "react-icons/io5";
import {Dispatch, SetStateAction} from "react";

export const PhotoCardCheckBox = (
    {
        setChecked,
        isChecked,
    }:
    {
        setChecked: Dispatch<SetStateAction<boolean>>,
        isChecked: boolean
    }
)=>{
    return (
        <div onClick={() => setChecked(!isChecked)}
             className={`${isChecked ? 'opacity-100' : null} opacity-0 group-hover/photo-card:opacity-20 hover:opacity-100 absolute bg-blue-500 w-6 h-6 flex items-center justify-center rounded text-white left-2 bottom-2 cursor-pointer`}>
            <IoCheckmark/>
        </div>
    )
}