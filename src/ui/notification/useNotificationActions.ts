import {useMemo} from "react";
import {bindActionCreators} from "redux";
import {useAppDispatch} from "@lib/store/hooks";
import {notificationControllerActions} from "@ui/notification/notification.slice";

export const useNotificationControllerActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(()=>bindActionCreators({...notificationControllerActions}, dispatch), [dispatch])
}