import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './card.css';
import Nav from './Nav';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [raceFilter, setRaceFilter] = useState('');
  const [affiliationFilter, setAffiliationFilter] = useState('');

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

  const filteredCharacters = characters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      (genderFilter === '' || character.gender === genderFilter) &&
      (raceFilter === '' || character.race === raceFilter) &&
      (affiliationFilter === '' || character.affiliation === affiliationFilter)
    );
  });

  return (
    <div>
      <h1>Dragon Ball Characters</h1>

      <Nav 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        raceFilter={raceFilter}
        setRaceFilter={setRaceFilter}
        affiliationFilter={affiliationFilter}
        setAffiliationFilter={setAffiliationFilter}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!isLoading && !error && filteredCharacters.length > 0 && (
        <ul className="characters-list">
          {filteredCharacters.map((character) => (
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
      )}
    </div>
  );
};

export default Characters;