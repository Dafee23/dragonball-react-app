import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './card.css'; 
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await axios.get('https://dragonball-api.com/api/characters?page=?&limit=58');
        console.log('Respuesta de la API:', result);

        // Manejo de la nueva estructura de la API
        if (Array.isArray(result.data.items)) {
          setCharacters(result.data.items);
        } else if (result.data && result.data.results) {
          // Estructura alternativa: accede a través de "results"
          setCharacters(result.data.results);
        } else {
          console.error("Error: la estructura de la respuesta ha cambiado");
        }
      } catch (error) {
        setError("Error al obtener personajes: " + error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Dragon Ball Characters</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!isLoading && !error && characters.length > 0 && (
        <ul className="characters-list">
          {characters.map((character) => (
            <li key={character.id} className="card-item">
              <Card
                key={character.id}
                image={character.image}
                name={character.name}
                ki={character.ki}
                maxKi={character.maxKi}
                race={character.race}
                gender={character.gender}
                description={character.description}
                affiliation={character.affiliation}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Characters;
