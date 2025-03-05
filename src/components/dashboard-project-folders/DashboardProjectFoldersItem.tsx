'use client'

import Link from "next/link";
import {HiDotsVertical} from "react-icons/hi";
import {IFolders} from "@myPrisma/types";
import {fileCountToString} from "@utils/lib/fileCountToString";
import {fileSizeToString} from "@utils/lib/fileSizeToString";
import {usePathname} from "next/navigation";
import {APP_PATH} from "@constants/urls";

export const DashboardProjectFoldersItem = (
    {
        folder
    }:{
        folder: IFolders
    }
)=>{

    const pathname = usePathname();
    const isActive = pathname.endsWith(`folder/${folder.id}`);
    const linkOnOtherFolder = `${APP_PATH.dashboard.projectId(folder.projectId)}/folder/${folder.id}`

    const linkUrl = () => {
        return isActive ? pathname : linkOnOtherFolder;
    }
    return (
        <div className={`flex items-center border ${isActive ? 'border-black' : 'border-gray-300 '} rounded pr-2 hover:border-black duration-300`}>
            <Link href={linkUrl()} className="info pl-5 py-2 pr-10">
                <h5 className='text-black text-md'>{folder.title}</h5>
                <span className={`text-xs ${isActive ? 'text-black' : 'text-gray-400'}`}>
                    {`${fileCountToString(folder.fileCount || 0)} (${fileSizeToString(folder.size || 0)})`}
                </span>
            </Link>
            <div className="setting p-1 hover:bg-neutral-200 rounded-full">
                <HiDotsVertical size={13} className='cursor-pointer'/>
            </div>
        </div>
    )
}