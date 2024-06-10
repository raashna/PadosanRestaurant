import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from '/logo/padosan_logo.png';
import { NavLink, useNavigate } from "react-router-dom";
import cartIcon from '/cartIcon.jpg';
import { StoreContext } from "./StoreContext";
import { assets } from "../assests/assets";


export const Navbar = ({ setShowLogin }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const navigate = useNavigate();
    const {getTotalCartAmount,token,setToken} =useContext(StoreContext);
    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }
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
                        <div className={getTotalCartAmount()===0?"":"dot"}></div>
                    </div>
                    {!token?<button onClick={() => setShowLogin(true)}>SignIn</button>
                    :<div className="navbar-profile">
                        <img src={assets.profile_icon} alt="" />
                        <ul className="navbar-profile-dropdown">
                            <li onClick={()=>navigate("/MyOrders")}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>logout</p></li>
                        </ul>
                    </div>}
                    
                </div>
            </div>
        </nav>
    );
};
