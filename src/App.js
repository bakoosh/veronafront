import './App.css';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Products from "./veiws/Products/Products";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import React, {useContext, useEffect, useState} from "react";
import Main from "./veiws/Main/Main";
import Login from "./veiws/Login/Login";
import {AuthUserContext} from "./contexts/AuthUserContext";
import Me from "./veiws/Me/Me";
import Favourites from "./veiws/Favourites/Favourites";
import './config/axios-interceptors';
import PrivateRoute from "./config/PrivateRoute";
import ModalComponent from "./components/Modal";
import ChooseCity from "./components/ChooseCity";
import Catalog from "./veiws/Catalog/Catalog";
import {CatalogContext} from "./contexts/CatalogContext";
import {ModalContext} from "./contexts/ModalContext";
import {CityContext} from "./contexts/CityContext";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Basket from "./veiws/Basket/Basket";


function App() {
    const {authUser, setAuthUser} = useContext(AuthUserContext)
    const { isOpenCatalog, setIsOpenCatalog } = useContext(CatalogContext);
    const {isOpen , setIsOpen} = useContext(ModalContext)
    const {setCity} = useContext(CityContext)
    const location = useLocation();


    useEffect(() => {
        const city = localStorage.getItem("city") ? localStorage.getItem("city") : null;
        if (city) {
            setCity(city)
        }
        else {
            setCity('')
        }
    }, []);

    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user) {
            setAuthUser(JSON.parse(user));}
        else {
            setAuthUser(undefined)
        }
    }, []);


    useEffect(() => {
        setIsOpenCatalog(false)
    }, [location.pathname]);



  return (
    <div className="App">
        <ToastContainer autoClose={3000} position="top-right" style={{ zIndex: 9999 }} />

        <ModalComponent
            isOpen={isOpen}
            onRequestClose={() =>  setIsOpen(!isOpen)}
            Component={ChooseCity}
        />
        <Header/>
        <div className="container mx-auto px-4">
            {isOpenCatalog && (
                <div className="absolute top-[70px] left-0 w-full bg-white z-40 shadow-md">
                    <Catalog />
                </div>
            )}
            <div className={"flex"}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route
                        path="/favourites"
                        element={
                            <PrivateRoute authUser={authUser}>
                                <Favourites />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/basket"
                        element={
                            <PrivateRoute authUser={authUser}>
                                <Basket />
                            </PrivateRoute>
                        }
                    />
                    {
                        authUser ? <Route path={'/me'} element={<Me/>}/> : <Route path="/login" element={<Login />} />
                    }
                </Routes>
            </div>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
