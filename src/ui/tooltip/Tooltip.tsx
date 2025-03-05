export const Tooltip = (
    {message, className}:{message:string, className?:string},
) => {

    const afterStyle = `after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:w-3 after:h-3 after:border-r-5 after:border-b-5 after:border-neutral-800 after:rotate-45`
    return (
        <div className={`${className} duration-200 absolute -top-8 bg-neutral-800 text-white text-xs px-4 py-1 rounded z-[9999] whitespace-nowrap ${afterStyle} after:-translate-x-1/2 `}>
            {message}
        </div>
    )
}