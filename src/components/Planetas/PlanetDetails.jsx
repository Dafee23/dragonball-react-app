import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Personajes/card.css'; 
import Card from '../Personajes/CardCharacters';

const PlanetDetails = () => {
  const { id } = useParams(); 
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      const result = await axios.get(` https://dragonball-api.com/api/planets/${id}`); 
      setPlanet(result.data);
    };

    fetchPlanet();
  }, [id]);

  if (!planet) return null; 

  return (
    <div className="planet-details">
      <h1>{planet.name}</h1>
      <div className='planet-detailsP'>
      <img src={ planet.image}  />
      </div>
      <ul>
        <li>Descripcion: {planet.description}</li> 
      </ul>

      {planet.characters && planet.characters.length > 0 && ( 
        <div className="residents">
          <h2>Residentes Notables</h2>
          <ul className="characters-list">
            {planet.characters.map((character) => ( 
              
              <li key={character.id} className="card-item">
                  <Card
                    key={character.id}
                    id={character.id} // <--- Pasar el id
                    image={character.image}
                    name={character.name}
                    ki={character.ki}
                    maxKi={character.maxKi}
                    race={character.race}
                    gender={character.gender}
                    affiliation={character.affiliation}
                  />
                </li>
              
            ))}
          </ul>
        </div>
      )} 
    </div>
  );
};

export default PlanetDetails;