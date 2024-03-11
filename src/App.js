import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Characters from './components';
import CharacterDetails from './components/Personajes/CharactersDetails';
import PlanetDetails from './components/Planetas/PlanetDetails';

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters/>}/>
        <Route path="/character/:id" element={<CharacterDetails/>} />
        <Route path="/planet/:id" element={<PlanetDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;