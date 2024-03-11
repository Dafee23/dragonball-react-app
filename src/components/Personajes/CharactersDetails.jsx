import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './card.css';
import CardPlanets from '../Planetas/CardPlanets';


const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const result = await axios.get(`https://dragonball-api.com/api/characters/${id}`);
      setCharacter(result.data);
    };

    fetchCharacter();
  }, [id]);

  if (!character) return null;

  return (
    <div className="character-details">
      <h1>{character.name}</h1>
      <div className='imagenCh'>
      <img src={character.image} alt={character.name} />
      </div>
      <p>{character.description}</p>
      <ul>
        <li>Especie: {character.race}</li>
        <li>Género: {character.gender}</li>
        <li>Ki: {character.maxKi}</li>
        <li>Ocupación: {character.affiliation}</li>
        <li>Planeta: {character.originPlanet.name}</li>
        <li key={character.id} className="card-item">
              <CardPlanets
                id={character.originPlanet.id} 
                name={character.originPlanet.name}
                image={character.originPlanet.image}
              />
            </li>
      </ul>

      {character.transformations.length > 0 && (
        <div className="transformations">
          <h2>Transformaciones</h2>
          <div className="transformations-grid">
            {character.transformations.map((transformacion) => (
              <div className="transformation-card" key={transformacion.name}>
                <h3>{transformacion.name}</h3>
                <img src={transformacion.image} alt={transformacion.name} />
                <p>Ki: {transformacion.ki}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;