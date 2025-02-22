export const DashboardContent = (
    {children}:{children:React.ReactNode}
) => {
    return (
        <div className='p-8 overflow-y-scroll'>
            {children}
        </div>
    )
}