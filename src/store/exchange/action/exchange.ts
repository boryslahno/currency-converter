import {AnyAction, Dispatch} from "redux";
import {loadRate, RateType, setError, startLoading, stopLoading} from "../exchangeReducer";

export const fetchExchange = () => async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
        const responseUSD = await fetch('https://api.exchangerate.host/convert?from=UAH&to=USD');
        const responseEUR = await fetch('https://api.exchangerate.host/convert?from=UAH&to=EUR');
        const responsePLN = await fetch('https://api.exchangerate.host/convert?from=UAH&to=PLN');
        const usd = await responseUSD.json();
        const eur = await responseEUR.json();
        const pln = await responsePLN.json();
        dispatch(loadRate({usd: usd.result, eur: eur.result, pln: pln.result}))
    } catch (error) {
        dispatch(setError());
    } finally {
        dispatch(stopLoading());
    }
}