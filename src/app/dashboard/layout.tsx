import React from "react";
import {DashboardNavbar} from "@components/dashboard-navbar/DashboardNavbar";




export default async function DashboardLayout(
    { children }: Readonly<{ children: React.ReactNode }>){

    return (
        <>
            <DashboardNavbar/>
            <div className={`absolute left-[160px] right-0 top-0 bottom-0 overflow-x-auto`}>
                <div className='h-full min-w-[900px]'>
                        {children}
                </div>
            </div>
        </>
    );
}