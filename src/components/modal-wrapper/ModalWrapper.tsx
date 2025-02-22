import './index.css'
import React from "react";


export const ModalWrapper = ({children, isOpen}:
                                 {children: React.ReactNode, isOpen: boolean}) => {


    return(
          <div
                className={`modal fixed flex items-center justify-center top-0 bottom-0 right-0 left-0 w-full min-h-screen bg-[rgba(0,0,0,0.2)] ${isOpen? 'modal--open' : 'modal--close'}`}>
                <div className={`modal__content`}>
                    {children}
                </div>
            </div>)
}
