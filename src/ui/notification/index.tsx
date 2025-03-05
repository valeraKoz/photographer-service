import {CiCircleAlert, CiCircleCheck, CiCircleInfo, CiFaceFrown} from "react-icons/ci";
import {RxCross2} from "react-icons/rx";
import {useAppSelector} from "@lib/store/hooks";
import {useNotification} from "@ui/notification/useOpenNotification";

export const Toast = () => {

    const toastIsOpen = useAppSelector(store=>store.NotificationController.isOpen);
    const toastStatus = useAppSelector(store=> store.NotificationController.status)
    const toastMessage = useAppSelector(store=>store.NotificationController.message)
    const {handleCloseNotification} = useNotification()

    const iconSize = 25
    const styled = (() => {
        switch (toastStatus) {
            case 'success': {
                return {
                    border: 'border-l-4 border-l-green-600',
                    color: 'color-green-600',
                    textColor: 'text-green-600',
                    titleText: 'Успешно'
                }
            }
            case 'info': {
                return {
                    border: 'border-l-4 border-l-blue-500',
                    color: 'color-blue-500',
                    textColor: 'text-blue-500',
                    titleText: 'Информация'
                }
            }
            case 'warning': {
                return {
                    border: 'border-l-4 border-l-orange-600',
                    color: 'color-orange-600',
                    textColor: 'text-orange-600',
                    titleText: 'Внимательно'
                }
            }
            case 'error': {
                return {
                    border: 'border-l-4 border-l-red-600',
                    color: 'color-red-600',
                    textColor: 'text-red-600',
                    titleText: 'Ошибка'
                }
            }
        }
    })()

    return (
        <div className='absolute top-0 right-[10%]'>
            <div
                className={`${toastIsOpen ? 'mt-3' : '-mt-20'} flex items-center relative justify-center gap-36 border rounded py-2 px-4 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] ${styled.border} duration-300`}>
                <div className='flex items-center justify-center gap-2'>
                    <div className={styled.textColor}>
                        {toastStatus === 'error' ? <CiCircleAlert size={iconSize}/> :
                            toastStatus === 'success' ? <CiCircleCheck size={iconSize}/> :
                                toastStatus === 'info' ? <CiCircleInfo size={iconSize}/> :
                                    <CiFaceFrown size={iconSize}/>
                        }
                    </div>
                    <div>
                        <p className='font-bold'>{styled.titleText}</p>
                        <p className='text-sm text-gray-500'>{toastMessage}</p>
                    </div>
                </div>
                <RxCross2 className='cursor-pointer' onClick={handleCloseNotification}/>
            </div>
        </div>
    )
}