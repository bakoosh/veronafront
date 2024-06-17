import './App.css';
import {Route, Routes} from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Products from "./pages/Products";


function App() {
  return (
    <div className="App">
        <div className={"flex"}>
            <Sidebar/>

            <Routes>            // Вынести в отдельный configRouter
                <Route path="/products" element={<Products/>}/>
            </Routes>

        </div>

    </div>
  );
}

export default App;
