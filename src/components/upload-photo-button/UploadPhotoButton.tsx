'use client'

import {IoCloudUploadOutline} from "react-icons/io5";
import {ChangeEvent, useState} from "react";
import {ModalWrapper} from "@components/modal-wrapper/ModalWrapper";
import {ProgressBar} from "@ui/progress-bar/ProgressBar";

export const UploadPhotoButton = () => {
    const [files, setFiles] = useState<FileList | null>(null);
    const [progressBarOpen, setProgressBarOpen] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const filesData = e.target.files as FileList;
        if(filesData.length > 0){
            setProgressBarOpen(true)
            setFiles(filesData)
        }
    }
    return (
        <>
            <div className='flex'>
                <label htmlFor="downloadFile"
                       className='flex items-center gap-2 py-2 px-10 border rounded cursor-pointer hover:bg-gray-300 duration-300 active:scale-95'>
                    <input
                        onChange={(e) => handleInputChange(e)}
                        id='downloadFile' type="file" multiple hidden/>
                    <IoCloudUploadOutline/>
                    Загрузить
                </label>
            </div>
            {
                progressBarOpen && files && (
                    <ModalWrapper isOpen={progressBarOpen}>
                        <ProgressBar files={files} closeModal={()=>setProgressBarOpen(false)}/>
                    </ModalWrapper>
                )
            }
        </>
    )
}


