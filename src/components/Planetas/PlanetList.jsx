import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardPlanets from './CardPlanets';

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoadingPlanets, setIsLoadingPlanets] = useState(false);
  const [errorPlanets, setErrorPlanets] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      setIsLoadingPlanets(true);
      setErrorPlanets(null);
      try {
        const result = await axios.get('https://dragonball-api.com/api/planets?limit=20'); 
        if (Array.isArray(result.data.items)) {
            setPlanets(result.data.items);
        } else {
            console.error("Error: la respuesta de la API no contiene una lista de planetas");
            setErrorPlanets("Error al obtener planetas");
        }
      } catch (error) {
        setErrorPlanets("Error al obtener planetas: " + error.message);
      } finally {
        setIsLoadingPlanets(false);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <div>
      {isLoadingPlanets && <p>Loading...</p>}
      {errorPlanets && <p style={{ color: "red" }}>{errorPlanets}</p>}
      {!isLoadingPlanets && !errorPlanets && planets.length > 0 && (
        <ul className="characters-list"> 
          {planets.map((planet) => (
            <li key={planet.id} className="card-item">
              <CardPlanets
                id={planet.id} 
                name={planet.name}
                image={planet.image}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlanetList;