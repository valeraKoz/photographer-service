'use client'

import {useProjectId} from "@/app/dashboard/disk/projects/[id]/ProjectProvider";
import {useCreateFolder, useGetAllFolders} from "@lib/db/hooks";
import {usePathname, useRouter} from "next/navigation";
import {APP_PATH} from "@constants/urls";
import {useCallback, useEffect, useState} from "react";
import {IFolders} from "@myPrisma/types";

const FolderPage = () => {
    const {projectId} = useProjectId()
    const {mutate} = useCreateFolder();
    const {data, isLoading, isSuccess, isError, error} = useGetAllFolders(projectId);
    const pathname = usePathname()
    const [isCreate, setIsCreate] = useState(false);
    const router = useRouter()

    // Мемоизация мутации
    const stableMutate = useCallback(
        (data: IFolders) => mutate(data),
        [mutate]
    )


    useEffect(() => {
        if(isSuccess && data?.length > 0){
            router.push(`${APP_PATH.BASE_URL}/${pathname}/${data[0].id}`)
        }
    }, [isSuccess,data,pathname,router]);

    useEffect(() => {
        if(isSuccess && data?.length === 0 && !isCreate){
            setIsCreate(true);
            stableMutate({title: 'Исходники', projectId})
        }
    }, [isSuccess, data, pathname, isCreate,router,stableMutate]);



    if (isLoading) {
        return (
            <div className='flex flex-grow items-center justify-center'>
                Загрузка...
            </div>
        )
    }

    if (isError) {
        return (
            <div className='flex flex-grow items-center justify-center'>
                Ошибка: {error.message}
            </div>
        )
    }

    return (
        <div className='flex flex-grow items-center justify-center'>
            {isCreate ? "Создание новой папки..." : "Перенаправление..."}
        </div>
    )
}

export default FolderPage;