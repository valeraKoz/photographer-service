'use client'

import {ModalWrapper} from "@components/modal-wrapper/ModalWrapper";
import {useState} from "react";
import {ModalCreateFolder} from "@components/modal-create-folder/ModalCreateFolder";


export const DashboardProjectAddFolderButton = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div
                onClick={() => setModalOpen(true)}
                className='projectAddFolder hover:cursor-pointer hover:text-gray-600 flex items-center'>
                + Добавить папку

            </div>
            <ModalWrapper isOpen={modalOpen}>
                <ModalCreateFolder setModalOpen={setModalOpen}/>
            </ModalWrapper>
        </>
    )
}