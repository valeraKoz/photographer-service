export const DashboardContent = (
    {children}:{children:React.ReactNode}
) => {
    return (
        <div className='p-8 overflow-y-scroll flex flex-col flex-grow'>
            {children}
        </div>
    )
}