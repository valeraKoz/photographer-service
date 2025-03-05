import {createSlice} from "@reduxjs/toolkit";

type modalControllerStateType = {
    modalIsOpen: boolean;
}

const modalControllerInitialState: modalControllerStateType = {
    modalIsOpen: false
}

export const modalControllerSlice = createSlice({
    name: 'ModalController',
    initialState: modalControllerInitialState,
    reducers: {
        toogleModal: (state)=>{
            state.modalIsOpen = !state.modalIsOpen
            console.log(state.modalIsOpen);
        }
    }
})

export const { actions: modalControllerActions, reducer: modalControllerReducer } = modalControllerSlice;