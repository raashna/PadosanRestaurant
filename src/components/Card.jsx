import React from 'react';
import './Card.css'; // Import the CSS file
import { Link} from 'react-router-dom';

export const Card = ({ imageUrl, title, description,galleryLink }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={galleryLink} className="btn-primary">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;