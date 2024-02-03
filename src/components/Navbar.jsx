import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from '/public/padosan_logo.jpg'



export const Navbar = () =>{
    
    const [menuOpen , setMenuOpen]= useState(false)
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
            <NavLink to = "/home">Home</NavLink>
            </li>
            <li>
            <NavLink to = "/about">About</NavLink>
            </li>
            <li>
            <NavLink to = "/menu">Menu</NavLink>
            </li>
            <li>
            <NavLink to = "/gallery">Gallery</NavLink>
            </li>
            <li>
            <NavLink to = "/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
        
    )
}
