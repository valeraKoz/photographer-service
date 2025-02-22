import {Dispatch, SetStateAction} from "react";

export const FullWidthButton = ({title,icon,setModalOpen}
                                    :{title:string,icon: string | React.ReactNode, setModalOpen: Dispatch<SetStateAction<boolean>>})=>{
    return (
        <div
            className='bg-neutral-200 rounded-lg flex items-center justify-center h-10 hover:h-32 hover:cursor-pointer duration-300 group/add-project active:scale-95'>
            <button
                onClick={() => setModalOpen(true)}
                className='w-full h-full flex items-center justify-center gap-3'>{icon}
                <span className='block w-0 overflow-hidden group-hover/add-project:w-auto duration-300'>
                        {title}
                    </span>
            </button>
        </div>
    )
}