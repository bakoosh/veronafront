import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import SearchProvider from "./contexts/SearchContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <SearchProvider>
            <BrowserRouter>
                    <App />
            </BrowserRouter>
        </SearchProvider>
    );

