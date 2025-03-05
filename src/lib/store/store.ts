import {combineSlices, configureStore} from '@reduxjs/toolkit'
import {modalControllerSlice} from "@lib/store/modal-slice/modal.slice";
import {notificationControllerSlice} from "@ui/notification/notification.slice";


const reducers = combineSlices(modalControllerSlice, notificationControllerSlice)

export const store = () => {
    return configureStore({
        reducer: reducers,
        middleware: getDefaultMiddleware => getDefaultMiddleware()
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']