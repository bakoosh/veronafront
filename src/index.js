import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import SearchProvider from "./contexts/SearchContext";
import AuthProvider from "./contexts/AuthUserContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <SearchProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SearchProvider>
    </AuthProvider>
    );

