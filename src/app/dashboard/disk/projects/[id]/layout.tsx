import {DashboardDiskTabs} from "@components/dashboard-disk-tabs/DashboardDiskTabs";
import {PROJECT_ROUTES} from "@/app/dashboard/routeSetting";
import {DashboardHeader} from "@components/dashboard-header/DashboardHeader";
import React from "react";
import {DashboardContent} from "@components/dashboard-content/DashboardContent";
import {DashboardProjectTitle} from "@components/dashboard-project-title/DashboardProjectTitle";
import {ProjectProvider} from "@/app/dashboard/disk/projects/[id]/ProjectProvider";
import {DashboardProjectFolders} from "@components/dashboard-project-folders/DashboardProjectFolders";



export default async function ProjectIdLayout(
    {children, params}: { children: React.ReactNode , params: {id: string}},
){
    const projectId = (await params).id;


    return(
        <ProjectProvider projectId={+projectId}>
            <DashboardHeader>
                <DashboardProjectTitle/>
                <DashboardDiskTabs routes={PROJECT_ROUTES(projectId)} className='mt-4' border={'bottom'}/>
            </DashboardHeader>
            <DashboardContent>
                <DashboardProjectFolders/>
                {children}
            </DashboardContent>
        </ProjectProvider>
    )
}