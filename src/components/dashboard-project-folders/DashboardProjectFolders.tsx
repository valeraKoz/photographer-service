'use client'

import {useGetAllFolders} from "@lib/db/hooks";
import {DashboardProjectAddFolderButton} from "@components/dashboard-project-folders/DashboardProjectAddFolderButton";
import {DashboardProjectFoldersItem} from "@components/dashboard-project-folders/DashboardProjectFoldersItem";
import {useProjectId} from "@/app/dashboard/disk/projects/[id]/ProjectProvider";

export const DashboardProjectFolders = () => {
    const {projectId} = useProjectId()
    const {data, isLoading, isSuccess, isError, error} = useGetAllFolders(projectId)


    return (
        <div className='projectPageFolders flex items-stretch gap-4 min-h-16'>
            {
                isLoading ? 'Загрузка...' : (
                    isError ? error.message : (
                        isSuccess ? data?.length>0 ? data?.map((folder,index)=>(
                            <DashboardProjectFoldersItem folder={folder} key={index}/>
                        )) : null : null
                    )
                )
            }
            <DashboardProjectAddFolderButton/>
        </div>
    )
}