import {IoClose} from "react-icons/io5";
import React from "react";


export const ModalTitle = (
    {
        title,
        callback
    }:
    {
        title: string
        callback: React.MouseEventHandler
    }
)=>{
    return (
        <div className='flex justify-between items-center'>
            <h1 className='text-xl'>{title}</h1>
            <button
                onClick={(e) => callback(e)}
                className='bg-neutral-200 p-2 rounded'>
                <IoClose/>
            </button>
        </div>
    )
}