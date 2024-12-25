import React from 'react'
import { NavLink } from "react-router-dom";
import "./index.css"

const Header = () => {
  return (
    <header>
        <nav>
            <div className="logo"><h1>Logo.</h1></div>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
                <li><NavLink to={"/products"}>Products</NavLink></li>

            </ul>
        </nav>
    </header>
  )
}

export default Header