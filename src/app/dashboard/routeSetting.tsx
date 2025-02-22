import {ITabRoutes} from "@components/dashboard-disk-tabs/DashboardDiskTabs";
import {LuFolder, LuFolders} from "react-icons/lu";
import {FaRegClock} from "react-icons/fa6";
import React from "react";
import {FaRegHeart} from "react-icons/fa";

export const DISK_ROUTES:ITabRoutes[] = [
    {
        url:'/dashboard/disk/projects',
        title:'Проекты',
        icon: <LuFolders/>
    },
    {
        url:'/dashboard/disk/expiring',
        title: 'Истекает срок',
        icon: <FaRegClock/>
    }
]

export const PROJECT_ROUTES = (id: string):ITabRoutes[]  => {
    return [
        {
            url:`/dashboard/disk/projects/${id}`,
            title: 'Проект',
            icon: <LuFolder/>
        },
        {
            url: `/dashboard/disk/projects/${id}/favorites`,
            title: 'Избранное',
            icon: <FaRegHeart/>
        }
    ]
}