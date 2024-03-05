import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Characters from './components/Characters';
import CharacterDetails from './components/CharactersDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;