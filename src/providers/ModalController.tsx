'use client'

import './index.css'
import {useAppSelector, useStoreActions} from "@lib/store/hooks";
import {Toast} from "src/ui/notification";


export const ModalController = () => {
    const modalIsOpen = useAppSelector(store=>store.ModalController.modalIsOpen)
    const {toogleModal} = useStoreActions()

    return(
        <>
            <div
                onClick={() => toogleModal()}
                className={`modal fixed flex items-center justify-center top-0 bottom-0 right-0 left-0 w-full min-h-screen bg-[rgba(0,0,0,0.2)] ${modalIsOpen ? 'modal--open' : 'modal--close'}`}>
                <div className='p-20 bg-white'>
                    Modal
                </div>
            </div>
            <Toast/>
        </>
    )
}