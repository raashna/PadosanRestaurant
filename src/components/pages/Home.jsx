import React from "react";
import './home.css';
import logo from '/public/padosan_logo.jpg'

export const Home = () => {
    return (
        <>
      <div>
        <img src={logo} height="300px" width="800px" alt="logo"></img>
      </div>
      <div id="offer">
        <h2>What We Offer</h2>
      </div>
            
      </> 
    )
}
