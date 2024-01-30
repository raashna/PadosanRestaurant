import React from 'react';
import './Card.css'; // Import the CSS file

export const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card-container">
      <img className="circular-image" src={imageUrl} alt="Profile" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;