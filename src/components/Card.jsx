import React from 'react';
import './card.css'; 
const Card = ({ image, name, ki, maxKi, race, gender, affiliation }) => {
    return (
      <div className="card">
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