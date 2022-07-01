import React from "react";
import style from './Converter.module.scss';
import {Tabs, Tab, Box, CircularProgress} from "@mui/material";
import {Routes, Route, useLocation, Link} from 'react-router-dom';
import {ConverterForm} from "../ConverterForm";
import useTypedSelector from "../../hooks/useTypedSelector";


const Converter: React.FC = () => {
    const location = useLocation();
    const isLoading = useTypedSelector(state => state.isLoading);

    return (
        <Box className={style.converter}>
            {isLoading ? <CircularProgress className={style.progress} size={80}/> :
                <>
                    <Tabs value={location.pathname} variant="fullWidth">
                        <Tab label="Home" component={Link} to={`/`} value={`/`}/>
                        <Tab label="USD" component={Link} to={`/usd`} value={`/usd`}/>
                        <Tab label="EUR" component={Link} to={`/eur`} value={`/eur`}/>
                        <Tab label="PLN" component={Link} to={`/pln`} value={`/pln`}/>
                    </Tabs>
                    <Routes>
                        <Route path="/" element={<div className={style.home}>Currency Converter</div>}/>
                        <Route path="/usd" element={<ConverterForm currency='usd'/>}/>
                        <Route path="/eur" element={<ConverterForm currency='eur'/>}/>
                        <Route path="/pln" element={<ConverterForm currency='pln'/>}/>
                    </Routes>
                </>
            }
        </Box>
    );
}

export {Converter};