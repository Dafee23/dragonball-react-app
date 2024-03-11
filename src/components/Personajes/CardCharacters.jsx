import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css';

const Card = ({ id, image, name, ki, maxKi, race, gender, affiliation }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(`/character/${id}`);
    };
  
    return (
      <div className="card" onClick={handleClick}>
        <img src={image} alt={name} />
        <div className="card-content">
          <h2>{name}</h2>
        <ul className="info-list">
          <li>
            <span>Ki:</span>
            {ki}
          </li>
          <li>
            <span>Ki Máximo:</span>
            {maxKi}
          </li>
          <li>
            <span>Raza:</span>
            {race}
          </li>
          <li>
            <span>Género:</span>
            {gender}
          </li>
          <li>
            <span>Afiliación:</span>
            {affiliation}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
