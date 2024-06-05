// src/App.js
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import socket from './config/socketConfig';
import GameMenu from './components/GameMenu';
import CreateGame from './components/CreateGame';

const App = () => {
  const [gameState,setGameState] = useState({_id : "",isOpen : false,players : [],words : []});
  const navigate = useNavigate();

  useEffect(()=>{
    socket.on('updateGame',(game)=>{
      console.log(game);
      setGameState(game);
    });
    return ()=>{
      socket.removeAllListeners();
    }
  },[]);

  useEffect(()=>{
    if(gameState._id !== "")
      navigate(`/game/${gameState._id}`);
  },[gameState._id]);

  return (
      <Routes>
        <Route path="/" element={<GameMenu />} />
        <Route path="/game/create" element={<CreateGame />} />
      </Routes>
  );
}

export default App;
