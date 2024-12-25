import Header from "./layouts/Client/Header/index";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Client/Contact/index";
import Products from "./pages/Client/Products/index";
import Home from "./pages/Client/Home/index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
