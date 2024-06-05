import React from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../config/socketConfig';
import CountDown from './CountDown';
import StartButton from './StartButton';
import DisplayWords from './DisplayWords';
import DisplayGameCode from './DisplayGameCode';
import Form from './Form.jsx';
import ProgressBar from './ProgressBar';
import ScoreBoard from './ScoreBoard';

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
            <ProgressBar players={players} player={player} wordsLength={words.length}/>
            <Form isOpen={isOpen} isOver={isOver} gameID={_id}/>
            <CountDown />
            <StartButton player={player} gameID={_id} />
            { isOpen ? <DisplayGameCode gameID={_id}/> : null}
            <ScoreBoard players={players}/>
        </div>
    )
}

export default Game;
