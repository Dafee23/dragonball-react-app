import React from 'react';
import './Nav.css';

const Nav = ({ 
    searchValue, 
    setSearchValue, 
    genderFilter, 
    setGenderFilter, 
    raceFilter, 
    setRaceFilter, 
    affiliationFilter, 
    setAffiliationFilter
}) => {
  return (
    <nav>
      <ul>
        <li><a href="#">Planetas</a></li>
        <li><a href="#">Personajes</a></li>
      </ul>

      <div className="filtros">
        <li>
          <label for="genero">Género:</label>
          <select id="genero" name="genero" onChange={(e) => setGenderFilter(e.target.value)}>
            <option value="">Todos</option>
            <option value="Male">Masculino</option>
            <option value="Female">Femenino</option>
          </select>
        </li>
        <li>
          <label for="raza">Raza:</label>
          <select id="raza" name="raza" onChange={(e) => setRaceFilter(e.target.value)}>
            <option value="">Todas</option>
            <option value="Human">Human</option>
            <option value="Saiyan">Saiyan</option>
            <option value="Namekian">Namekian</option>
            <option value="Frieza Race">Frieza Race</option>
            <option value="Android">Android</option>
            <option value="Jiren Race">Jiren Race</option>
            <option value="God">God</option>
            <option value="Angel">Angel</option>
            <option value="Evil">Evil</option>
            <option value="Nucleico">Nucleico</option>
            <option value="Nucleico benigno">Nucleico benigno</option>
            <option value="Majin">Majin</option>
          </select>
        </li>
        <li>
          <label for="afiliacion">Afiliación:</label>
          <select id="afiliacion" name="afiliacion" onChange={(e) => setAffiliationFilter(e.target.value)}>
            <option value="">Todas</option>
            <option value="Z Fighter">Z Fighter</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Army of Frieza">Army of Frieza</option>
            <option value="Pride Troopers">Pride Troopers</option>
            <option value="Assistant of Vermoud">Assistant of Vermoud</option>
            <option value="Assistant of Beerus">Assistant of Beerus</option>
            <option value="Villain">Villain</option>
            <option value="Other">Other</option>
          </select>
        </li>
        <li>
          <input type="text" placeholder="Buscar..." id="buscador" name="buscador" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </li>
      </div>
    </nav>
  );
};

export default Nav;