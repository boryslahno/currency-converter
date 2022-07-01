import {createSlice} from "@reduxjs/toolkit";

export type RateType = {
    usd: number,
    eur: number,
    pln: number,
}

type RateLoadActionType = {
    payload: RateType
}

const initialState = {
    usd: 0,
    eur: 0,
    pln: 0,
    isLoading: true,
    error: false,
}

export const exchangeSlice = createSlice({
    name: 'exchange',
    initialState,
    reducers: {
        startLoading(state) {
            return {...state, isLoading: true}
        },
        stopLoading(state) {
            return {...state, isLoading: false}
        },
        loadRate(state, action: RateLoadActionType) {
            return {...state, usd: action.payload.usd, eur: action.payload.eur, pln: action.payload.pln};
        },
        setError(state){
            return {...state, error: true}
        }
    }
})

export const {startLoading, stopLoading, loadRate, setError} = exchangeSlice.actions;
export default exchangeSlice.reducer;