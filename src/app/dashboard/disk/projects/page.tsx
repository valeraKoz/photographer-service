'use client'

import {DashboardProjectCard} from "@components/dashboard-project-card/DashboardProjectCard";
import {ModalWrapper} from "@components/modal-wrapper/ModalWrapper";
import React, {useState} from "react";
import {ModalCreateProject} from "@components/modal-create-project/ModalCreateProject";
import {FullWidthButton} from "@ui/full-width-button/FullWidthButton";
import {DashboardPageTitle} from "@components/dashboard-page-title/DashboardPageTitle";
import {DashboardDiskTabs} from "@components/dashboard-disk-tabs/DashboardDiskTabs";
import {DashboardHeader} from "@components/dashboard-header/DashboardHeader";
import {DashboardContent} from "@components/dashboard-content/DashboardContent";
import {DISK_ROUTES} from "@/app/dashboard/routeSetting";
import {useGetAllProjects} from "@lib/db/hooks";



export default function ProjectPage(){
    const [modalOpen, setModalOpen] = useState(false);
    const {data,isLoading,isError,error,isSuccess} = useGetAllProjects()
    return(
        <>
                <DashboardHeader>
                    <DashboardPageTitle title={'Облачное хранилище'} subtitle={'Управление проектами'}/>
                    <DashboardDiskTabs routes={DISK_ROUTES} className='mt-4' border={'bottom'}/>
                </DashboardHeader>

                <DashboardContent>
                    <div className='flex flex-col gap-4'>
                        <FullWidthButton title={'Добавить проект'} icon={'+'} setModalOpen={setModalOpen}/>
                        {
                            isLoading ? 'Загрузка...' : (
                                isError ? error.message : (
                                    isSuccess ? data?.map((project,index)=>(
                                        <DashboardProjectCard data={project} key={index}/>
                                    )) : null
                                )
                            )
                        }
                    </div>
                </DashboardContent>

            <ModalWrapper isOpen={modalOpen}>
                <ModalCreateProject setModalOpen={setModalOpen}/>
            </ModalWrapper>

        </>
    )
}

