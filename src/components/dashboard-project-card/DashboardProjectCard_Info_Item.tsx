import cn from "classnames";

type colSpan = 'col-span-1' |'col-span-2' | 'col-span-3' | 'col-span-4'

type infoProps =
    | {data:string, children?:never, title: string, colSpan?: colSpan}
    | {data?:never, children: React.ReactNode, title: string, colSpan?: colSpan};


export const DashboardProjectCardInfoItem = (
    {
        data,
        children,
        title,
        colSpan = 'col-span-1'
    }:infoProps) => {

    return (
        <div
            className={cn('project__item p-3 border border-neutral-400 rounded-md flex flex-col gap-4',
                colSpan)}>
            <div className="project__item-title text-sm">{title}</div>
            <div className="project__item-info text-xl flex items-center justify-between">
                {children || data}
            </div>
        </div>
    )
}