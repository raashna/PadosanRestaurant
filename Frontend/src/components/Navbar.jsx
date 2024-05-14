import React, { useState } from "react";
import "./Navbar.css";
import logo from '/logo/padosan_logo.png'
import { Link,NavLink } from "react-router-dom";
import cartIcon from '/logo/cart.png'


export const Navbar = ({setShowLogin}) =>{
    const [menu,setMenu] = useState("");
    const activeClass = "active";
    return ( 
        <nav>
        <div className="navbar">
            <img className="logo" src={logo}  alt="logo"></img>
        
            <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?activeClass:""}>Home</Link>
            <a href="/about" onClick={()=>setMenu("about")} className={menu==="about"?activeClass:""}>About</a>
            <a href="/foodchart" onClick={()=>setMenu("menu")} className={menu==="menu"?activeClass:""}>Menu</a>
            <a href="/gallery" onClick={()=>setMenu("gallery")} className={menu==="gallery"?activeClass:""}>Gallery</a>
            <a href="/contact" onClick={()=>setMenu("contact")} className={menu==="contact"?activeClass:""}>Contact</a>
            </ul>
    
            <div className="navbar-right">
                <div className="cart">
                <Link to="/foodBasketFinal"><img  src={cartIcon} alt="foodBasket" /></Link>
                <div className="dot"></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>SignIn</button>
            </div>
            
        </div>
        </nav>
        
        
    )
}
