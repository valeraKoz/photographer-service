'use client'

import {DashboardLink} from "@components/dashboard-link/DashboardLink";

import { IoDocumentTextOutline } from "react-icons/io5";
import { GrStorage } from "react-icons/gr";
import { FaRegAddressCard } from "react-icons/fa";
import Image from "next/image";
import {DASHBOARD_CONFIG} from "@constants/settings";


export const DashboardNavbar = () => {

    return (
        <div className={`dashboard__navbar h-screen flex flex-col gap-20 items-center fixed w-[160px] bg-[#fff] shadow-xl`}>
            <Image src={'/logo.png'} alt={'logo'} width={140} height={100} className='drop-shadow-lg mt-3'/>

            <nav className='flex flex-col w-full'>
                <DashboardLink
                    border='right'
                    url={DASHBOARD_CONFIG.NAVBAR.PAGES.URL}
                    title={DASHBOARD_CONFIG.NAVBAR.PAGES.TITLE}
                    icon={<IoDocumentTextOutline size={DASHBOARD_CONFIG.ICON_SIZE}/>}/>
                <DashboardLink
                    border='right'
                    url={DASHBOARD_CONFIG.NAVBAR.DISK.URL}
                    title={DASHBOARD_CONFIG.NAVBAR.DISK.TITLE}
                    icon={<GrStorage size={DASHBOARD_CONFIG.ICON_SIZE}/>}/>
                <DashboardLink
                    border='right'
                    url={DASHBOARD_CONFIG.NAVBAR.CARD.URL}
                    title={DASHBOARD_CONFIG.NAVBAR.CARD.TITLE}
                    icon={<FaRegAddressCard size={DASHBOARD_CONFIG.ICON_SIZE}/>}/>
            </nav>
        </div>
    )
}