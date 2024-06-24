import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import SearchProvider from "./contexts/SearchContext";
import AuthProvider from "./contexts/AuthUserContext";
import ErrorBoundary from "./config/ErrorBoundary";
import CatalogProvider from "./contexts/CatalogContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <StrictMode>
            <CatalogProvider>
                <ErrorBoundary>
                        <AuthProvider>
                            <SearchProvider>
                                <BrowserRouter>
                                    <App />
                                </BrowserRouter>
                            </SearchProvider>
                        </AuthProvider>
                    </ErrorBoundary>
                </CatalogProvider>
        </StrictMode>
    );

