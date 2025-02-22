'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

export const DashboardLink = (
    {
        url,
        title,
        icon,
        border='right',
    }:
    {
        url:string,
        title:string,
        icon:React.ReactNode,
        border?: 'right'|'left'|'bottom'|'top'| 'all' | 'none'
    }) => {

    const pathname = usePathname();
    const isActive = border === 'right' ? pathname.startsWith(url) : pathname === url;



    return (
            <Link
                className={`dashboard__navbar-link text-[#39174f] flex items-center w-auto gap-3 text-sm px-6 py-2 ${isActive ? `font-bold border-pink-500` : null} transition-colors ease-in-out duration-200 hover:bg-pink-100`}
                style={
                    border === 'bottom' && isActive ? {borderBottomWidth: 4}:
                    border === 'top' && isActive ? {borderTopWidth: 4}:
                    border === 'right' && isActive ? {borderRightWidth: 4}:
                    border === 'left' && isActive ? {borderLeftWidth: 4}: {border: 0}
                }
                href={url} >
                    {icon}
                    {title}
            </Link>
    )
}