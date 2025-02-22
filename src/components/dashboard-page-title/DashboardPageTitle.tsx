'use client';

export const DashboardPageTitle = (
    {
        title,
        subtitle
    }:
    {
        title:string,
        subtitle:string
    }) => {


    return (
        <div className=''>
            <h2 className='text-4xl font-medium'>
                {title}
            </h2>
            <span>{subtitle}</span>
        </div>
    )
}