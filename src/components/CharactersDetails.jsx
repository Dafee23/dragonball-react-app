import React from 'react';

const CharacterDetails = ({ character }) => {
  // Ya no se define 'characters' aquí
  const { id, name, image, description, ki, maxKi, race, gender, affiliation } = character;

  return (
    <div className="character-details">
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{description}</p>
      <ul>
        <li>Ki: {ki}</li>
        <li>Max Ki: {maxKi}</li>
        <li>Raza: {race}</li>
        <li>Género: {gender}</li>
        <li>Afiliación: {affiliation}</li>
      </ul>
    </div>
  );
};

export default CharacterDetails;
