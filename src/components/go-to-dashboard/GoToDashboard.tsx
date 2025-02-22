'use client'
import {IoSettings} from "react-icons/io5";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {APP_PATH} from "@constants/urls";

export const GoToDashboard = () => {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith(APP_PATH.dashboard.main);

    return (
        <>
        {
            isDashboard ? '' : <div className='fixed top-1 w-full flex items-center justify-center'>
                <Link href="/dashboard">
                    <div className='flex items-center justify-center gap-2 bg-neutral-400 p-2 text-xs text-white rounded active:scale-95'>
                        <span>К доске управления</span>
                        <IoSettings/>
                    </div>
                </Link>
            </div>
        }
        </>
    )
}