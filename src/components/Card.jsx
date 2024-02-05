import React from 'react';
import './Card.css'; // Import the CSS file

export const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn-primary">Explore</a>
        </div>
      </div>
    </div>
  );
};

export default Card;