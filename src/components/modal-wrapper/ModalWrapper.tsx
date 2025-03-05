import './index.css'
import React from "react";


export const ModalWrapper = ({children, isOpen}:
                                 {children: React.ReactNode, isOpen: boolean}) => {


    return(
          <div
                className={`modal fixed flex items-center justify-center top-0 bottom-0 right-0 left-0 w-full min-h-screen bg-[rgba(0,0,0,0.2)] ${isOpen? 'modal--open' : 'modal--close'}`}>
              <div className={`modal__content`}>
                  <div className='modal-project-setting min-w-[500px] p-8 bg-white rounded-lg flex flex-col gap-4'>
                      {children}
                  </div>
              </div>
          </div>
    )
}
