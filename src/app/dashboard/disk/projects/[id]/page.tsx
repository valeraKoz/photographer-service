import Link from "next/link";
import {HiDotsVertical} from "react-icons/hi";


export default async function ProjectPageId({params}: {params: {id: string}}) {
    const {id: projectId} = await params;

    return(
        <div>
            <div className='projectPageFolders flex items-stretch gap-4 min-h-16'>
                <div className='projectPageFoldersItem flex items-center border rounded pr-2'>
                    <Link href={'/'} className="info pl-5 py-2 pr-10">
                        <h5 className='text-black text-md'>Photos</h5>
                        <span className='text-xs'>0 файлов (314 Кб)</span>
                    </Link>
                    <div className="setting">
                        <HiDotsVertical/>
                    </div>
                </div>
                <div className='projectAddFolder hover:cursor-pointer flex items-center'>
                    + Добавить папку
                </div>
            </div>
        </div>
    )
}