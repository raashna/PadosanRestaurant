import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from '/logo/padosan_logo.png'



export const Navbar = () =>{
    
    const [menuOpen , setMenuOpen]= useState(false);
    const closeMenu = ()=> {
        setMenuOpen(false);
    };
    return ( 
        <nav>
        <Link to = "/" className="title">
            <img className="logo" src={logo}  alt="logo"></img>
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
       </div>
       <script></script>
        <ul className={menuOpen ? "open" : ""}>
            <li>
            <NavLink to = "/home" onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
            <NavLink to = "/about" onClick={closeMenu}>About</NavLink>
            </li>
            <li>
            <NavLink to = "/menu" onClick={closeMenu}>Menu</NavLink>
            </li>
            <li>
            <NavLink to = "/gallery" onClick={closeMenu}>Gallery</NavLink>
            </li>
            <li>
            <NavLink to = "/contact" onClick={closeMenu}>Contact</NavLink>
            </li>
        </ul>
    </nav>
        
    )
}
