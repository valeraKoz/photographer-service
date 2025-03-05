export const PhotoCardTitle = ({title}:{title:string}) => {
    return (
        <div className='w-full flex items-center justify-center absolute -bottom-6 text-xs text-gray-500'>
            {title}
        </div>
    )
}