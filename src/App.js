import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Products from "./veiws/Products/Products";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {useContext} from "react";
import {SearchContext} from "./contexts/SearchContext";
import Main from "./veiws/Main/Main";
import Login from "./veiws/Login/Login";


function App() {
    const {searchValue} = useContext(SearchContext)
    console.log(searchValue)

  return (
    <div className="App">
        <Header/>
        <div className="container mx-auto px-4">
            <div className={"flex"}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
