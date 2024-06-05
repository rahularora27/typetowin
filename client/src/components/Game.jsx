import React from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../config/socketConfig';
import CountDown from './CountDown';
import StartButton from './StartButton';
import DisplayWords from './DisplayWords';

const findPlayer = players => {
    return players.find(player => player.socketID === socket.id);
}

const Game = ({ gameState }) => {
    const { _id, players, words, isOpen, isOver } = gameState;
    const player = findPlayer(players);
    const navigate = useNavigate();

    if (_id === "") {
        navigate("/");
        return null;
    }

    return (
        <div className="text-center">
            <DisplayWords words={words} player={player}/>
            <CountDown />
            <StartButton player={player} gameID={_id} />
        </div>
    )
}

export default Game;
