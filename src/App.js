import './App.css';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Products from "./veiws/Products/Products";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {useContext, useEffect, useState} from "react";
import Main from "./veiws/Main/Main";
import Login from "./veiws/Login/Login";
import {AuthUserContext} from "./contexts/AuthUserContext";
import Me from "./veiws/Me/Me";
import Favourites from "./veiws/Favourites/Favourites";
import './config/axios-interceptors';
import PrivateRoute from "./config/PrivateRoute";
import ModalComponent from "./components/Modal";
import ChooseCity from "./components/ChooseCity";


function App() {
    const {authUser, setAuthUser} = useContext(AuthUserContext)

    const [isOpen , setIsOpen] =  useState(false);
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
        <Header/>
        <div className="container mx-auto px-4">

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
