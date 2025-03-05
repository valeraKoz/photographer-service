import {useEffect, useRef, useState} from "react";
import {fileSizeToString} from "@utils/lib/fileSizeToString";
import {usePhotoUpload} from "@service/file-upload/useFileUpload";
import {useFolderId} from "@/app/dashboard/disk/projects/[id]/folder/[folderId]/FolderProvider";



export const ProgressBar = (
    {closeModal, files}:
    {closeModal: ()=>void, files: FileList},
) => {
    const {folderId} = useFolderId();
    const {status, error, totalProgress, totalSize, abortUpload, startUpload } = usePhotoUpload(files, folderId);
    const [overallProgress, setOverallProgress] = useState(0);
    const initialized = useRef(false);

    useEffect(() => {
        if(!initialized.current && files){
            initialized.current = true;
            startUpload(files);
        }
    }, [files, startUpload]);

    useEffect(() => {
        if(totalSize > 0){
       setOverallProgress(Math.round((totalProgress/totalSize) * 100));
        }
    }, [totalSize, totalProgress]);

    useEffect(() => {
        if(status === 'error' || status === 'success') {
            const timer = setTimeout(closeModal,600)
            return ()=> clearTimeout(timer)
        }
    }, [status]);

    return (
        <div className='flex items-center flex-col gap-7'>
            <p className='text-xl'>Подождите, идет загрузка...</p>
            <div className='w-full relative h-8 bg-gray-100 border'>
                <div style={{width: `${overallProgress}%`}} className={`bg-pink-500 h-full duration-200`}></div>
                <p className='absolute w-full h-full top-0 flex items-center justify-center'>
                    {`${fileSizeToString(totalProgress)} из ${fileSizeToString(totalSize)}`}
                </p>
            </div>
            <button
                    className={`border rounded px-10 py-2 text-sm w-1/2 ${error? 'hidden' : null}`}
                    onClick={abortUpload}>
                Отменить загрузку
            </button>
        </div>
    )
}