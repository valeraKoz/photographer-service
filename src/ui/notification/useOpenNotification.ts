
import {useNotificationControllerActions} from "@ui/notification/useNotificationActions";
import {notificationControllerStateType} from "@ui/notification/notification.slice";
import {useEffect, useRef} from "react";

export const useNotification = () => {
    const {openNotification, closeNotification} = useNotificationControllerActions();
    const timerRef = useRef<NodeJS.Timeout | null>(null);


    const showNotification = ({status, message}:notificationControllerStateType) => {
        // Очищаем предыдущий таймер перед открытием нового
        if(timerRef.current) clearTimeout(timerRef.current)

        openNotification({status,message});
        timerRef.current = setTimeout(()=>{
            closeNotification()
        }, 3000)
    }
    const handleCloseNotification = () => {
        if(timerRef.current){
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        closeNotification();
    }

    // Очистка таймера при размонтировании компонента
    useEffect(() => {
        return ()=> {
            if(timerRef.current) clearTimeout(timerRef.current)
        }
    }, []);


    return {
        showErrorNotification: (message: string)=>showNotification({status:'error',message}),
        showSuccessNotification: (message: string)=>showNotification({status:'success',message}),
        showWarningNotification: (message: string)=>showNotification({status:'warning',message}),
        showInfoNotification: (message: string)=>showNotification({status:'info',message}),
        handleCloseNotification}
}