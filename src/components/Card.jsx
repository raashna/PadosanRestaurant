import React from 'react';
import './Card.css'; // Import the CSS file

export const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card-container">
      <img className="circular-image" src={imageUrl} alt="Profile" />
      <article className='text'>
      <h2>{title}</h2>
      <p>{description}</p>
      <button href="./">Explore</button>
      </article>
    </div>
  );
};

export default Card;