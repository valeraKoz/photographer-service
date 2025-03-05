import {IconType} from "react-icons";
import {CiEdit, CiImport, CiLink, CiMaximize1, CiStar, CiTrash} from "react-icons/ci";
import {ReactElement} from "react";
import {Tooltip} from "@ui/tooltip/Tooltip";

export const PhotoCardControls = ({photoId,className}:{photoId: number,className:string}) => {

    const iconsStyle = {
        strokeWidth: 0.3
    }

    const handleClick = ()=>{
        console.log('photoId', photoId)
    }

    return (
        <div className={`${className} opacity-0 duration-200 absolute -top-3 flex justify-center bg-white z-10 left-1/2 transform -translate-x-1/2 shadow-md`}>
            <PhotoCardControlsItem onClick={handleClick} tooltipMessage={'Открыть'} icon={<CiMaximize1 style={iconsStyle}/>}/>
            <PhotoCardControlsItem onClick={handleClick} tooltipMessage={'Сделать обложкой'} icon={<CiStar style={iconsStyle}/>}/>
            <PhotoCardControlsItem onClick={handleClick} tooltipMessage={'Изменить название'} icon={<CiEdit style={iconsStyle}/>}/>
            <PhotoCardControlsItem onClick={handleClick} tooltipMessage={'Скачать'} icon={<CiImport style={iconsStyle}/>}/>
            <PhotoCardControlsItem onClick={handleClick} tooltipMessage={'Скопировать ссылку'} icon={<CiLink style={iconsStyle}/>}/>
            <PhotoCardControlsItem onClick={handleClick} tooltipMessage={'Удалить'} icon={<CiTrash style={{...iconsStyle, color:"red"}}/>}/>
        </div>
    )
}

const PhotoCardControlsItem = (
    {onClick,icon, tooltipMessage}:{onClick:React.MouseEventHandler,icon:ReactElement<IconType>, tooltipMessage:string}
) => {
    return (
        <div
            onClick={onClick}
            className='group/photo-controls-item relative flex items-center justify-center outline outline-[rgba(0,0,0,0.03)] hover:bg-gray-200 w-7 h-7 active:scale-95'>
            <Tooltip className={'group-hover/photo-controls-item:opacity-100 opacity-0 pointer-events-none'} message={tooltipMessage}/>
            {icon}
        </div>
    )
}