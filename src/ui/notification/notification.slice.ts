import {createSlice} from "@reduxjs/toolkit";

export type notificationControllerStatus = "success" | "info" | "warning" | "error";
export type notificationControllerStateType = {
    isOpen?: boolean;
    status: notificationControllerStatus,
    message: string,
}

const notificationControllerInitialState: notificationControllerStateType = {
    isOpen: false,
    status: 'success',
    message: ''
}

export const notificationControllerSlice = createSlice({
    name: 'NotificationController',
    initialState: notificationControllerInitialState,
    reducers: {
        openNotification: (state, {payload}:{payload: notificationControllerStateType})=>{
            state.isOpen = true
            state.status = payload.status;
            state.message = payload.message;
        },
        closeNotification: (state)=>{
            state.isOpen = false
        },

    }
})

export const { actions: notificationControllerActions, reducer: toastControllerReducer } = notificationControllerSlice;