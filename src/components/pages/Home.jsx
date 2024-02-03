import React from "react";
import './home.css';
import logo from '/padosan_logo.jpg'
import centreImg from '/centreImg.jpg'
import titiksha from '/titiksha_logo.jpg'
import {Card} from "/src/components/Card.jsx"

export const Home = () => {
    return (
        <>
      <div className="centre-img">
        <img src={centreImg} alt="logo"></img>
        <div class="text_container">
        <h2 class="img_text">Taste the difference.</h2>
        <button href="./">Order Now</button>
        </div>

      </div>


      <div>
        <h2>Our Ventures</h2>
        <ul className="venture" typeof="none">
          <li>
            <Card
            imageUrl={titiksha}
            title="Titiksha"
            description="trying"
            />
          </li>
          <li>
            <Card
            imageUrl={logo}
            title="Atithi"
            description="trying"
            />
          </li>
          <li>
            <Card
            imageUrl={logo}
            title="Amantran"
            description="trying"
            />
          </li>
      </ul>
      </div>

            
      </> 
    )

}
