'use client'

import {IoCopyOutline} from "react-icons/io5";
import Link from "next/link";
import {DashboardProjectCardInfoItem} from "@components/dashboard-project-card/DashboardProjectCard_Info_Item";
import {DashboardProjectCardTitle} from "@components/dashboard-project-card/DashboardProjectCardTitle";
import {IProject} from "@myPrisma/types";
import {APP_PATH} from "@constants/urls";


export const DashboardProjectCard = ({data}: {data:IProject}) => {
    const {
        id,
        title,
        fileCount,
        size,
        coverImageKey,
        photoshootDate,
        autoDeleteDate,
        visitCount,
        downloadCount,
        uniqueLink
    } = data

    const newPhotoshotDate = photoshootDate && new Date(photoshootDate).toLocaleDateString()
    const newAutoDeleteDate = autoDeleteDate && new Date(autoDeleteDate).toLocaleDateString()

    return (
            <div className='project bg-neutral-200 w-full rounded-lg p-6 flex flex-col gap-8'>
                <DashboardProjectCardTitle
                    title={title}
                    href={APP_PATH.dashboard.projectId(id!)}
                    fileCount={fileCount !== null && fileCount !== undefined ? fileCount : 0}
                    size={size !== null && size !== undefined ? size : 0}
                />
                <div className='project__footer grid grid-cols-6 gap-3'>
                    <DashboardProjectCardInfoItem title={'Дата съемки'} data={newPhotoshotDate!}/>
                    <DashboardProjectCardInfoItem title={'Дата удаления'} data={newAutoDeleteDate!}/>
                    <DashboardProjectCardInfoItem title={'Кол-во посещений'} data={visitCount !== null && visitCount !==undefined ? visitCount.toString() : '0'}/>
                    <DashboardProjectCardInfoItem title={'Кол-во скачиваний'} data={downloadCount !== null && downloadCount !== undefined ? downloadCount.toString() : '0'}/>
                    <DashboardProjectCardInfoItem title={'Ссылка на проект'} colSpan={'col-span-2'}>
                        <Link href={`/project${uniqueLink}`}>{uniqueLink}</Link>
                        <IoCopyOutline className='cursor-pointer' onClick={() => alert('Copy Link')}/>
                    </DashboardProjectCardInfoItem>
                </div>
            </div>
    )
}