import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Client-header/index.css"
const clientheader = () => {
  return (
   <header>
    <nav>
        <h1>Selling<span>.</span></h1>
        <ul>
            <li><NavLink to={"/"}> Home</NavLink></li>
            <li><NavLink to={"/Favorites"}> Favorites</NavLink></li>
            <li><NavLink to={"/Basket"}> Basket</NavLink></li>
            <li><NavLink to={"/Products"}> Products</NavLink></li>
        </ul>
    </nav>
   </header>
  )
}

export default clientheader
