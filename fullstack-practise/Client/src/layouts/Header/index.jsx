import React from 'react'
import { NavLink } from "react-router-dom";
import "../Header/index.css"
const Header = () => {
  return (
<header>
    <nav>
        <div className="logo">Logo.</div>
          <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/products"}>Products</NavLink>

            </li>
            <li>
                <NavLink to={"/wishlist"}>Wishlist</NavLink>

            </li>
            </ul>  
    </nav>
</header>
  )
}

export default Header
