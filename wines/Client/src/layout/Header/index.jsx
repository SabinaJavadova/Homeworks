import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "../Header/index.module.scss"
const Header = () => {
  return (
    <header>
        <nav className={style.header}>
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/wines/images/logo.png" alt="" />
            </div>

            <ul>
                <li><NavLink to={"/"}>Home </NavLink></li>
                <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
                <li><NavLink to={"/add"}>Add</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
