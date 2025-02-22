import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <div className='h-full relative flex flex-col'>
            {children}
        </div>
    )
}