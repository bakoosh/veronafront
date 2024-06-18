import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Products from "./veiws/Products/Products";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {useContext} from "react";
import {SearchContext} from "./contexts/SearchContext";


function App() {
    const {searchValue} = useContext(SearchContext)
    console.log(searchValue)

  return (
    <div className="App">
        <Header/>
        <div className={"flex"}>
            <Routes>
                <Route path="/products" element={<Products/>}/>
            </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
