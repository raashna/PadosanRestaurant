import React from "react";
import './home.css';
import atithi from '/atithi.jpg'
import amantran from '/amantran.jpg'
import centreImg from '/centreImg.jpg'
import titiksha from '/titiksha_logo.jpg'
import {Card} from "/src/components/Card.jsx"
import Header from "/src/components/Header.jsx"
import MovingGif from "/src/components/butterfly.jsx";
import { Link } from 'react-router-dom';
import { Gallery } from "./Gallery";

export const Home = () => {
    return (
        <>
        <MovingGif></MovingGif>
        <Header></Header>

      <div>
        <h2 className="home-heading"><center>Our Ventures</center></h2>
        <ul className="venture" typeof="none">
          <li>
            <Card
            imageUrl={titiksha}
            title="Titiksha"
            description="Hotel Titiksha is a luxurious haven offering unparalleled comfort and sophistication. Nestled in the heart of the city, it boasts exquisite decor, state-of-the-art amenities, and impeccable service. From spacious rooms to gourmet dining, Titiksha promises a memorable stay, ensuring guests experience opulence and relaxation at its finest."
            galleryLink="Gallery"
            />
          </li>
          <li>
            <Card
            imageUrl={atithi}
            title="Atithi"
            description="Hotel Atithi epitomizes elegance and hospitality in a prime location. With tastefully designed rooms, modern amenities, and attentive service, it defines a perfect blend of comfort and style. Guests are treated to a delightful experience, relishing fine dining and a warm atmosphere. Atithi is where hospitality meets sophistication."
            galleryLink="Gallery"
            />
          </li>
          <li>
            <Card
            imageUrl={amantran}
            title="Amantran"
            description="Amantran Banquet sets the stage for unforgettable events with its exquisite venue and impeccable services. The venue exudes charm and sophistication, providing a perfect backdrop for celebrations. With spacious halls, top-notch facilities, and a dedicated staff, Amantran ensures that every occasion is a seamless and memorable affair."
            galleryLink="Gallery"
            />
          </li>
        </ul>
      </div>
   
      </> 
    );

};