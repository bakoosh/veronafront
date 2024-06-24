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


function App() {
    const {authUser, setAuthUser} = useContext(AuthUserContext)
    const { isOpenCatalog, setIsOpenCatalog } = useContext(CatalogContext);
    const {isOpen , setIsOpen} = useContext(ModalContext)
    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user) {
            setAuthUser(JSON.parse(user));}
        else {
            setAuthUser(null)
        }
    }, []);

  return (
    <div className="App">
        <ModalComponent
            isOpen={isOpen}
            onRequestClose={() =>  setIsOpen(!isOpen)}
            Component={ChooseCity}
            componentProps={'qweasdad'}
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
