import React, {useEffect} from 'react';
import {Converter} from "../Converter";
import style from './Content.module.scss';
import {useDispatch} from "react-redux";
import {fetchExchange} from "../../store/exchange/action/exchange";
import useTypedSelector from "../../hooks/useTypedSelector";
import {Alert, AlertTitle } from "@mui/material";

const Content: React.FC = () => {
    const dispatch = useDispatch();
    let error = useTypedSelector(state => state.error);

    useEffect(() => {
        //Не зміг знайти рішення (any) (((
        dispatch(fetchExchange() as any);
    }, [])

    return (
        <main className={style.main}>
            <div className={style.block}/>
            <Converter/>
            {error && <Alert className={style.error} severity="error">
                <AlertTitle>Error</AlertTitle>
                An error occurred during the request — <strong>server error!</strong>
            </Alert>}
        </main>
    );
}

export {Content};