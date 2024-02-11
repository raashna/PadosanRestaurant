import React from "react";
import "./Gallery.css";
import { useState } from "react";

import ReactPlayer from 'react-player'

import slide_image_1 from "/xyz/A1 (1).jpg";
import slide_image_2 from "/xyz/A1 (2).jpg";
import slide_image_3 from "/xyz/A1 (3).jpg";
import slide_image_4 from "/xyz/A1 (4).jpg";
import slide_image_5 from "/xyz/A1 (5).jpg";
import slide_image_6 from "/xyz/A1 (6).jpg";
import slide_image_7 from "/xyz/A1 (7).jpg";
import slide_image_8 from "/xyz/A1 (9).jpg";
import slide_image_9 from "/xyz/A1 (11).jpg";
import slide_image_10 from "/xyz/A1 (12).jpg";
import slide_image_11 from "/xyz/A1 (13).jpg";
import slide_image_12 from "/xyz/A1 (14).jpg";
import slide_image_13 from "/xyz/A1 (16).jpg";
import slide_image_14 from "/xyz/A1 (17).jpg";
import slide_image_15 from "/xyz/A1 (18).jpg";
import slide_image_16 from "/xyz/A1 (19).jpg";
import slide_image_17 from "/xyz/A1 (20).jpg";
import slide_image_18 from "/xyz/A1 (21).jpg";
import slide_image_19 from "/xyz/A1 (22).jpg";
import slide_image_20 from "/xyz/A1 (23).jpg";
import slide_image_21 from "/xyz/A1 (24).jpg";
import slide_image_22 from "/xyz/A1 (26).jpg";
import slide_image_23 from "/xyz/A1 (27).jpg";
// import videos 
import padosan1 from "/videos/Padosan.mp4"
import sampleVideo1 from "/videos/sampleVideo.mp4"

const options = [
  {
    id: "1",
    name: "All Photos",
    images: [
      slide_image_1,
      slide_image_2,
      slide_image_3,
      slide_image_4,
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
    name: "Amantran",
    images: [
      slide_image_1,
      slide_image_2,
      slide_image_3,
      slide_image_4,
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
    id: "3",
    name: "Padosan",
    images: [
      "https://i.pinimg.com/236x/03/8a/01/038a0143f1ce26de1626b33e6bb5a69c.jpg",
      "https://i.pinimg.com/236x/91/47/23/914723cbf4d319f2e17f638a0de562f6.jpg",
      "https://i.pinimg.com/564x/41/d6/77/41d677ffb3441dae375d4a57767ff83e.jpg",
      "https://i.pinimg.com/236x/0a/d7/7f/0ad77febe4d34cedb6e25332d41fdb2a.jpg",
      "https://i.pinimg.com/236x/6f/09/22/6f09220e8d19bf83b1cc5e846476f77e.jpg",
      "https://i.pinimg.com/236x/f4/2d/76/f42d764f92d1b9890bf3659308e43443.jpg",
      "https://i.pinimg.com/236x/03/8a/01/038a0143f1ce26de1626b33e6bb5a69c.jpg",
      "https://i.pinimg.com/236x/91/47/23/914723cbf4d319f2e17f638a0de562f6.jpg",
    ],
  },
  {
    id: "4",
    name: "Atithi",
    images: [
      "https://i.pinimg.com/236x/32/8e/26/328e26f83b540df3208218756b6f3774.jpg",
      "https://i.pinimg.com/236x/ae/b7/30/aeb730f4efb9de31fbf58c2846f7ae9a.jpg",
      "https://i.pinimg.com/236x/93/ae/6d/93ae6ddbea5093f5c9ba65d03a2244a2.jpg",
      "https://i.pinimg.com/236x/50/10/73/50107379d270cbcbd997fafe6a53173a.jpg",
      "https://i.pinimg.com/236x/40/cd/b3/40cdb30b9cb2ae3ea051da4935307300.jpg",
      "https://i.pinimg.com/236x/50/16/38/5016382226db88c0aeb20c2cc8bb7f03.jpg",
      "https://i.pinimg.com/236x/32/8e/26/328e26f83b540df3208218756b6f3774.jpg",
      "https://i.pinimg.com/236x/ae/b7/30/aeb730f4efb9de31fbf58c2846f7ae9a.jpg",
    ],
  },
  {
    id: "5",
    name: "Titiksha",
    images: [
      "https://i.pinimg.com/236x/5e/98/7a/5e987a932348036c8bf85d0b0fe9f632.jpg",
      "https://i.pinimg.com/236x/27/4e/ef/274eeff56d51428f4665143181819825.jpg",
      "https://i.pinimg.com/236x/8e/4d/6c/8e4d6c58c162f2fcf1bb1f1367856bf1.jpg",
      "https://i.pinimg.com/236x/66/ca/68/66ca68c162dcd2338f893241c0d44c3e.jpg",
      "https://i.pinimg.com/236x/cd/66/ac/cd66aca8b44d45f9716614aa93a31362.jpg",
      "https://i.pinimg.com/236x/e0/68/a7/e068a756e003586336efb8bf6bb359cd.jpg",
      "https://i.pinimg.com/236x/5e/98/7a/5e987a932348036c8bf85d0b0fe9f632.jpg",
      "https://i.pinimg.com/236x/27/4e/ef/274eeff56d51428f4665143181819825.jpg",
    ],
  },

  {
    id: "6", // You can add more sections as needed
    name: "Videos",
    videos: [
      { url: sampleVideo1, title: "Sample Video 1" },
      { url: padosan1, title: "IntoPadosan" },
     
      // Add more videos as needed
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