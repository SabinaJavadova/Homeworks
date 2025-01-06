import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Client/Home'
import Favorites from './Pages/Client/Favorites'
import Basket from './Pages/Client/Basket'
import Products from './Pages/Client/Products'
import ClientLayout from './Pages/Client'

function App() {
  

  return (
    <>
    <Routes>
    <Route path='/' element={<ClientLayout/>}>

    <Route   index element={<Home/>}/>
    <Route path='/Favorites' element={<Favorites/>}/>
    <Route path='/Basket' element={<Basket/>}/>
    <Route path='/Products' element={<Products/>}/>

    </Route>
    </Routes>

    </>
  )
}

export default App
