import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import exchangeReducer from "./exchange/exchangeReducer";
import thunk from "redux-thunk";


export const store = createStore(exchangeReducer, applyMiddleware(thunk));

export type RootSate = ReturnType<typeof exchangeReducer>;