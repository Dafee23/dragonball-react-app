import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './card.css';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  console.log('ID recibido en CharacterDetails:', id);
  useEffect(() => {
    const fetchCharacter = async (id) => {
      const result = await axios.get(`https://dragonball-api.com/api/characters/${id}`);
      setCharacter(result.data);
    };

    fetchCharacter(id);
  }, [id]);

  if (!character) return null;

  return (
    <div className="character-details">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>{character.description}</p>
      <ul>
        <li>Especie: {character.race}</li>
        <li>Género: {character.gender}</li>
        <li>Ki: {character.maxKi}</li>
        <li>Ocupación: {character.affiliation}</li>
        <li>Planeta: {character.originPlanet.name}</li>
        <img src={character.originPlanet.image} alt={character.originPlanet.image}/>
      </ul>
    </div>
  );
};
export default CharacterDetails;