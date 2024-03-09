
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css'; // Asegúrate de tener un archivo card.css 

const CardPlanets = ({ id, name, isDestroyed, description, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/planet/${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt={name} />
      <div className="card-content">
        <h2>{name}</h2> 
        <ul className="info-list">
        </ul>
      </div>
    </div>
  );
};

export default CardPlanets;