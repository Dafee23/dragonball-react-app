import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

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
        <li>Especie: {character.species}</li>
        <li>Género: {character.gender}</li>
        <li>Origen: {character.origin}</li>
        <li>Ocupación: {character.occupation}</li>
        <li>Estado: {character.status}</li>
      </ul>
    </div>
  );
};
export default CharacterDetails;