import './App.css';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Products from "./veiws/Products/Products";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {useContext, useEffect} from "react";
import Main from "./veiws/Main/Main";
import Login from "./veiws/Login/Login";
import {AuthUserContext} from "./contexts/AuthUserContext";
import Me from "./veiws/Me/Me";
import Favourites from "./veiws/Favourites/Favourites";
import './config/axios-interceptors';


function App() {
    const {authUser, setAuthUser} = useContext(AuthUserContext)
    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user) {
            setAuthUser(user)
        }
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
                    <Route path="/favourites" element={<Favourites/>}/>
                    <Route path="/products" element={<Products/>}/>
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
