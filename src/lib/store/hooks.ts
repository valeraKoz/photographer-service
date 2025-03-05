import { useDispatch, useSelector, useStore } from 'react-redux'
import {AppDispatch, AppStore, RootState} from "@lib/store/store";
import {modalControllerActions} from "@lib/store/modal-slice/modal.slice";
import {useMemo} from "react";
import {bindActionCreators} from "redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()



const rootActions = {
    ...modalControllerActions,
}

export const useStoreActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(()=>bindActionCreators(rootActions, dispatch), [dispatch])
}
