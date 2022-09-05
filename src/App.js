import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Medura from "./Medura/Medura";
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
        <Route path="/" element={<Medura />} />
        <Route path="/Medura/Login" element={<Login />} />
        <Route path="/Medura/About_us" element={<Aboutus />} />
        <Route path="/Medura/Products" element={<Products />} />
        <Route
          path="/Medura/Product/:id"
          element={<Individual_Product_page />}
        />
        <Route path="/Medura/FAQ" element={<FAQ />} />
        <Route path="/Medura/Contect_us" element={<Contect_us />} />
        <Route path="/Medura/*" element={<Error_page />} />
      </Routes>
    </div>
  );
}

export default App;
