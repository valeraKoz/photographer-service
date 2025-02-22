import {DashboardLink} from "@components/dashboard-link/DashboardLink"
import {ReactElement} from "react";

export interface ITabRoutes {
    url: string;
    title: string;
    icon: ReactElement
}

export const DashboardDiskTabs = (
    {className, routes,border}:{
        className:string,
        routes: ITabRoutes[],
        border: 'bottom'|'top'|'left'|'right';
    }) => {
    return (
        <div className={`flex w-1/3 ${className}`}>
            {routes.map((link,index) => {
                return <DashboardLink key={index} url={link.url} title={link.title} icon={link.icon} border={border}/>
            })}
        </div>
    )
}