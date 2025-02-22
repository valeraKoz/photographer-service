import Link from "next/link";
import {IoSettingsOutline} from "react-icons/io5";
import {fileCountToString} from "@utils/lib/fileCountToString";
import {fileSizeToString} from "@utils/lib/fileSizeToString";

export const DashboardProjectCardTitle = (
    {
        title,
        href,
        fileCount,
        size
    }:{
        title: string,
        href: string,
        fileCount: number
        size: number
    }
) => {
    return (
        <div className='project__header flex justify-between'>
            <div className='project__info flex items-center gap-4'>
                <div className='project__image h-20 w-20 rounded-full bg-neutral-500'></div>
                <div className='project__title'>
                    <Link href={href} className='project__name text-3xl font-semibold'>
                        {title}
                    </Link>
                    <div className='project__file-count'>
                        {`${fileCountToString(fileCount)} (${fileSizeToString(size)})`}
                    </div>
                </div>
            </div>
            <div className='project__setting'>
                <IoSettingsOutline className='cursor-pointer' onClick={() => alert('Setting...')} size={30}/>
            </div>
        </div>
    )
}