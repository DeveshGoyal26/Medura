import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Medora from "./Medura/Medora";
import Login from "./Medura/Login";
import Aboutus from "./Medura/Aboutus";
import Products from "./Medura/Products";
import Individual_Product_page from "./Medura/Individual_Product_page";
import Contect_us from "./Medura/Contect_us";
import FAQ from "./Medura/FAQ";
import Error_page from "./Medura/Error_page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Medora />} />
        <Route path="/Medora/Login" element={<Login />} />
        <Route path="/Medora/About_us" element={<Aboutus />} />
        <Route path="/Medora/Products" element={<Products />} />
        <Route
          path="/Medora/Product/:id"
          element={<Individual_Product_page />}
        />
        <Route path="/Medora/FAQ" element={<FAQ />} />
        <Route path="/Medora/Contect_us" element={<Contect_us />} />
        <Route path="/Medora/*" element={<Error_page />} />
      </Routes>
    </div>
  );
}

export default App;
