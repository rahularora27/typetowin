// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameMenu from './components/GameMenu';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameMenu />} />
      </Routes>
    </Router>
  );
}

export default App;