import React from "react";
import "./Gallery.css";
import { useState } from "react";
import ReactPlayer from 'react-player'
import slide_image_1 from "/xyz/amantran/A1 (1).jpg";
import slide_image_2 from "/xyz/amantran/A1 (2).jpg";
import slide_image_3 from "/xyz/amantran/A1 (3).jpg";
import slide_image_4 from "/xyz/amantran/A1 (4).jpg";
import slide_image_5 from "/xyz/amantran/A1 (5).jpg";
import slide_image_6 from "/xyz/amantran/A1 (6).jpg";
import slide_image_7 from "/xyz/amantran/A1 (7).jpg";
import slide_image_8 from "/xyz/amantran/A1 (9).jpg";
import slide_image_9 from "/xyz/amantran/A1 (11).jpg";
import slide_image_10 from "/xyz/amantran/A1 (12).jpg";
import slide_image_11 from "/xyz/amantran/A1 (13).jpg";
import slide_image_12 from "/xyz/amantran/A1 (14).jpg";
import slide_image_13 from "/xyz/amantran/A1 (16).jpg";
import slide_image_14 from "/xyz/amantran/A1 (17).jpg";
import slide_image_15 from "/xyz/amantran/A1 (18).jpg";
import slide_image_16 from "/xyz/amantran/A1 (19).jpg";
import slide_image_17 from "/xyz/amantran/A1 (20).jpg";
import slide_image_18 from "/xyz/amantran/A1 (21).jpg";
import slide_image_19 from "/xyz/amantran/A1 (22).jpg";
import slide_image_20 from "/xyz/amantran/A1 (23).jpg";
import slide_image_21 from "/xyz/amantran/A1 (24).jpg";
import slide_image_22 from "/xyz/amantran/A1 (26).jpg";
import slide_image_23 from "/xyz/amantran/A1 (27).jpg";
 

import padosanvideo1 from "/videos/Padosan.mp4"
import instavideo1 from '/videos/Reelvideo1.mp4';
import instavideo2 from '/videos/Reelvideo2.mp4';
import instavideo3 from '/videos/Reelvideo3.mp4';
import instavideo4 from '/videos/Reelvideo4.mp4';
import instavideo5 from '/videos/Reelvideo5.mp4';
import instavideo6 from '/videos/Reelvideo6.mp4';
import instavideo7 from '/videos/Reelvideo7.mp4';
import instavideo8 from '/videos/Reelvideo8.mp4';
import instavideo9 from '/videos/Reelvideo9.mp4';

import Atithi1 from "/xyz/atithi/Atithi1.jpg";
import Atithi2 from "/xyz/atithi/Atithi2.jpg";

import Atithi5 from "/xyz/atithi/Atithi5.jpg";
import Atithi6 from "/xyz/atithi/Atithi6.jpg";
import Atithi7 from "/xyz/atithi/Atithi7.jpg";
import Atithi8 from "/xyz/atithi/Atithi8.jpg";
import Atithi9 from "/xyz/atithi/Atithi9.jpg";
import Atithi10 from "/xyz/atithi/Atithi10.jpg";
import Atithi11 from "/xyz/atithi/Atithi11.jpg";
import Atithi12 from "/xyz/atithi/Atithi12.jpg";

import padosan1 from "/xyz/padosan/padosan1.jpg"
import padosan2 from "/xyz/padosan/padosan2.jpg"
import padosan3 from "/xyz/padosan/padosan3.jpg"
import padosan4 from "/xyz/padosan/padosan4.jpg"
import padosan5 from "/xyz/padosan/padosan5.jpg"
import padosan6 from "/xyz/padosan/padosan6.jpg"
import padosan7 from "/xyz/padosan/padosan7.jpg"
import padosan8 from "/xyz/padosan/padosan8.jpg"
import padosan9 from "/xyz/padosan/padosan9.jpg"
import padosan10 from "/xyz/padosan/padosan10.jpg"
import padosan11 from "/xyz/padosan/padosan11.jpg"
import padosan12 from "/xyz/padosan/padosan12.jpg"
import padosan13 from "/xyz/padosan/padosan13.jpg"
import padosan14 from "/xyz/padosan/padosan14.jpg"
import padosan15 from "/xyz/padosan/padosan15.jpg"
import padosan16 from "/xyz/padosan/padosan16.jpg"
import padosan17 from "/xyz/padosan/padosan17.jpg"
import padosan18 from "/xyz/padosan/padosan18.jpg"
import padosan19 from "/xyz/padosan/padosan19.jpg"

// for titiksha 
import titiksha1 from "/xyz/titiksha/titiksha1.jpeg";
import titiksha2 from "/xyz/titiksha/titiksha2.jpeg";
import titiksha3 from "/xyz/titiksha/titiksha3.jpeg";
import titiksha4 from "/xyz/titiksha/titiksha4.jpeg";
import titiksha5 from "/xyz/titiksha/titiksha5.jpeg";
import titiksha6 from "/xyz/titiksha/titiksha6.jpeg";
import titiksha7 from "/xyz/titiksha/titiksha7.jpeg";
import titiksha8 from "/xyz/titiksha/titiksha8.jpeg";
import titiksha9 from "/xyz/titiksha/titiksha9.jpeg";
import titiksha10 from "/xyz/titiksha/titiksha10.jpeg";
import titiksha11 from "/xyz/titiksha/titiksha11.jpeg";
import titiksha12 from "/xyz/titiksha/titiksha12.jpeg";
import titiksha13 from "/xyz/titiksha/titiksha13.jpeg";
import titiksha14 from "/xyz/titiksha/titiksha14.jpeg";

import titiksha16 from "/xyz/titiksha/titiksha16.jpeg";


const options = [
  

  {
    id: "1",
    name: "Amantran",
    images: [
      slide_image_1,
      slide_image_2,
      
      slide_image_5,
      slide_image_6,
      slide_image_7,
      slide_image_8,
      slide_image_9,
      slide_image_10,
      slide_image_11,
      slide_image_12,
      slide_image_13,
      slide_image_14,
      slide_image_15,
      slide_image_16,
      slide_image_17,
      slide_image_18,
      slide_image_19,
      slide_image_20,
      slide_image_21,
      slide_image_22,
      slide_image_23,
    ],
  },
  {
    id: "2",
    name: "Padosan",
    images: [
      padosan1,
      padosan2,
      padosan3,
      padosan4,
      padosan5,
      padosan6,
      padosan7,
      padosan8,
      padosan9,

      padosan10,
      padosan11,
      padosan12,
      padosan13,
      padosan14,
      padosan15,
      padosan16,
      padosan17,
      padosan18,
      padosan19,



    ],
  },
  {
    id: "3",
    name: "Atithi",
    images: [
      Atithi1,
      Atithi2,
     
      Atithi5,
      Atithi6,
      Atithi7,
      Atithi8,
      Atithi9,
      Atithi10,
      Atithi11,
      Atithi12,
     
      
    ],
  },
  {
    id: "4",
    name: "Titiksha",
    images: [
      titiksha1,
      titiksha2,
      titiksha3,
      titiksha4,
      titiksha5,
      titiksha6,
      titiksha7,
      titiksha8,
      titiksha9,
      titiksha10,
      titiksha11,
      titiksha12,
      titiksha13,
      titiksha14,
  
      titiksha16,

    ],
  },

  {
    id: "5", 
    name: "Videos",
    videos: [
      { url: padosanvideo1, title: "IntoPadosan" },
      { url: instavideo1, title: "IntoPadosan" },
      { url: instavideo2, title: "IntoPadosan" },
      { url: instavideo3, title: "IntoPadosan" },
      { url: instavideo4, title: "IntoPadosan" },
      { url: instavideo5, title: "IntoPadosan" },
      { url: instavideo6, title: "IntoPadosan" },
      { url: instavideo7, title: "IntoPadosan" },
      { url: instavideo8, title: "IntoPadosan" },
      { url: instavideo9, title: "IntoPadosan" },
      
     
      // Add more videos 
    ],
  },
];


export const Gallery = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      <div className="gallery-container">
        <div className="options-menu">
          {options.map((option) => (
            <li
              key={option.id}
              className={selectedOption.id === option.id ? "active" : ""}
              onClick={() => setSelectedOption(option)}
            >
              {option.name}
            </li>
          ))}
        </div>
        <div className="media-container">
          {selectedOption.images && (
            <div className="image-grid">
              {selectedOption.images.map((image, index) => (
                <div key={index} className="image-grid-item">
                  <img src={image} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
          {selectedOption.videos && (
            <div className="video-grid">
              {selectedOption.videos.map((video, index) => (
                <div key={index} className="video-grid-item">
                  <ReactPlayer
                    url={video.url}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                  <p>{video.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};