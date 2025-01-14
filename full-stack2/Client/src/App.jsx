import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Add from './pages/Add';
import WishList from './pages/Wishlist';
import NotFound from './pages/NotFound';
import Contact from './pages/contact';

function App() {
  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>
    
        <Route index element={<Home />} />
        <Route path="wines/:id" element={<Detail />} />
        <Route path="add" element={<Add />} />
        <Route path="wishlist" element={<WishList />} />
        
      </Route>
      
     
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
