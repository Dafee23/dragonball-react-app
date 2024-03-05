import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [filter, setFilter] = useState('characters');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <nav className="nav-bar">
      <h1>Dragon Ball</h1>
      <select value={filter} onChange={handleFilterChange}>
        <option value="characters">Personajes</option>
        <option value="planets">Planetas</option>
      </select>
      <Link to={`/characters/${filter}`}>
        <button>Ver {filter}</button>
      </Link>
    </nav>
  );
};

export default NavBar;