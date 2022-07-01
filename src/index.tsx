import React from 'react';
import ReactDOM from 'react-dom/client';
import {Layout} from './layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import './assets/styles/index.scss';
import {Provider} from "react-redux";
import {store} from './store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

