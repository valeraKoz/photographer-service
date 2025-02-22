import {DashboardPageTitle} from "@components/dashboard-page-title/DashboardPageTitle";
import {DashboardDiskTabs} from "@components/dashboard-disk-tabs/DashboardDiskTabs";
import {DashboardHeader} from "@components/dashboard-header/DashboardHeader";
import React from "react";
import {DISK_ROUTES} from "@/app/dashboard/routeSetting";

export default function ExpiringPage(){
    return (
        <>
            <DashboardHeader>
                <DashboardPageTitle title={'Облачное хранилище'} subtitle={'Управление проектами'}/>
                <DashboardDiskTabs routes={DISK_ROUTES} className='mt-4' border={'bottom'}/>
            </DashboardHeader>
        </>
    )
}