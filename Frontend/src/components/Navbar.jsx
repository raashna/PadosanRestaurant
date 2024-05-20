import React, { useState } from "react";
import "./Navbar.css";
import logo from '/logo/padosan_logo.png';
import { NavLink } from "react-router-dom";
import cartIcon from '/cartIcon.jpg';

export const Navbar = ({ setShowLogin }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav>
            <div className="navbar">
                <img className="logo" src={logo} alt="logo"></img>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
                    <NavLink to="/" onClick={closeMenu} activeClassName="active">Home</NavLink>
                    <NavLink to="/about" onClick={closeMenu} activeClassName="active">About</NavLink>
                    <NavLink to="/foodchart" onClick={closeMenu} activeClassName="active">Menu</NavLink>
                    <NavLink to="/gallery" onClick={closeMenu} activeClassName="active">Gallery</NavLink>
                    <NavLink to="/contact" onClick={closeMenu} activeClassName="active">Contact</NavLink>
                </ul>
                <div className="navbar-right">
                    <div className="cartIcon">
                        <NavLink to="/foodBasketFinal"><img src={cartIcon} alt="foodBasket" /></NavLink>
                        <div className="dot"></div>
                    </div>
                    <button onClick={() => setShowLogin(true)}>SignIn</button>
                </div>
            </div>
        </nav>
    );
};
