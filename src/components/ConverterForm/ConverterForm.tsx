import React, {useEffect, useState} from "react";
import useTypedSelector from "../../hooks/useTypedSelector";
import {TextField, Button} from "@mui/material";
import style from './ConverterForm.module.scss';

type ConverterFormPropsType = {
    currency: 'usd' | 'eur' | 'pln';
}

const ConverterForm: React.FC<ConverterFormPropsType> = ({currency}) => {
    const [value, setValue] = useState<number>(1);
    const [convertedValue, setConvertedValue] = useState<number>(0);
    const [resultString, setResultString] = useState<string>('');
    const rate = useTypedSelector(state => state[currency]);

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(+event.target.value);

    const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setConvertedValue(value * rate);
        }
    }

    const onConvertClick = () => setConvertedValue(value * rate);

    useEffect(() => {
        setConvertedValue(value * rate);
    }, [rate])

    useEffect(() => {
        setResultString(`${value} UAH = ${convertedValue} ${currency.toUpperCase()}`)
    }, [convertedValue])


    return (
        <div className={style.form}>
            <div className={style.control}>
                <TextField value={value} onChange={onValueChange} onKeyDown={onKeyPress} id="outlined-basic" label="UAH"
                           variant="outlined"/>
                <Button onClick={onConvertClick} variant="contained">Convert</Button>
            </div>
            <div className={style.result}>{resultString}</div>
        </div>
    );
}

export {ConverterForm};