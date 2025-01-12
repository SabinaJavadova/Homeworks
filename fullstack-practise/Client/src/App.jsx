import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from  "./Pages/Home"
import Products from "./Pages/Products";
import Wishlist from "./Pages/Wishlist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element= {<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="Products" element={<Products/>}/>
        <Route path="Wishlist" element={<Wishlist/>}/>
        </Route>

        
      </Routes>
    </>
  );
}

export default App;
