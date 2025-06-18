import React from 'react';
import './Card.css';

const Card = ({ title, icon, description }) => {
  return (
    <div className="card">
      <h2>{icon} {title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
