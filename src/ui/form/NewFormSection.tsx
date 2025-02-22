export const NewFormSection = (
    {
        children,
    }:
    {
        children: React.ReactNode;
    }) => {
    return(
        <div className='new-form-section flex flex-col gap-3 px-6 py-4 bg-gray-100 rounded'>
            {children}
        </div>
    )
}