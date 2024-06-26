import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import SearchProvider from "./contexts/SearchContext";
import AuthProvider from "./contexts/AuthUserContext";
import ErrorBoundary from "./config/ErrorBoundary";
import CatalogProvider from "./contexts/CatalogContext";
import ModalProvider from "./contexts/ModalContext";
import CityProvider from "./contexts/CityContext";
import FavouriteProvider from "./contexts/FavouriteContext";
import BasketProvider from "./contexts/BasketContext";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <StrictMode>
            <FavouriteProvider>
                <BasketProvider>
                    <CityProvider>
                        <ModalProvider>
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
                        </ModalProvider>
                    </CityProvider>
                </BasketProvider>
            </FavouriteProvider>
        </StrictMode>
    );

