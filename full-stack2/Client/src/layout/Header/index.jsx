import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.module.scss'
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src="https://preview.colorlib.com/theme/wines/images/logo.png" alt="" />
          </div>
          <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/add"}>Add</NavLink></li>
            <li><NavLink to={"/wishlist"}>WishList</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            
            
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header