import React, { useState } from 'react';
import './popup.css'; // Import the CSS file
import chat from '/chat.jpg';


const InfoCard = ({ onClose})=>{
    return (
        <div className='info-card'>
            <p>Phone:9204950003 | 9430196007  | 7677120003</p>
            <p>Email: welcomethepadosan@gmail.com</p>
        </div>
    )
}

export const Popup = () => {
    const [infoCardVisible, setInfoCardVisible]= useState(false);
    const toggleInfoCard = () => {
        setInfoCardVisible((prevVisible)=> !prevVisible);
    };
  return (
    <>
    <div className="info-button">
        <i className="btn" onClick={toggleInfoCard}>
            <img src={chat}></img>
          </i>
    </div>
    {infoCardVisible && <InfoCard onClose={toggleInfoCard}/>}
    </>
  );
};

export default Popup;