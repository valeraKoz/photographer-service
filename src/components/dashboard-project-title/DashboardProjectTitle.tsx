'use client';

import {useGetProjectById} from "@lib/db/hooks";
import Link from "next/link";
import {APP_PATH} from "@constants/urls";
import {BiSolidLeftArrowAlt} from "react-icons/bi";


export const DashboardProjectTitle = (
    {projectId}: { projectId:number}) => {

    const {data, isLoading, isSuccess, isError, error} = useGetProjectById(projectId!);
    return (
        <div className=''>
            <Link className='flex items-center mb-3' href={APP_PATH.dashboard.projects}>
                <BiSolidLeftArrowAlt/>
                Назад к проектам
            </Link>
            <h2 className='text-4xl font-medium'>
                {
                        isLoading ? 'Загрузка...' : (
                            isError ? error.message : (
                                isSuccess ? data?.title : null
                            )
                        )
                }
            </h2>
        </div>
    )
}