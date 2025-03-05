import React from "react";

export const ModalButtons = (
    {callback}:{callback: React.MouseEventHandler},
)=>{
    return (
        <div className='flex gap-2 justify-end'>
            <button
                onClick={(e) => callback(e)}
                className='w-1/4 p-2 rounded text-sm text-white bg-neutral-800'>
                Отмена
            </button>
            <button
                className='w-1/4 bg-neutral-300 text-sm p-2 rounded'
                type="submit">
                Добавить
            </button>
        </div>
    )
}