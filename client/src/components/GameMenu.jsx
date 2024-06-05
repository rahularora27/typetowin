import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameMenu = (props) => {
    let navigate = useNavigate();

    return (
        <div className="text-center p-6">
            <h1 className="text-3xl font-bold mb-8">Welcome to Type Racer Clone</h1>
            <button 
                type="button" 
                onClick={() => navigate('/game/create')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
                style={{ cursor: 'pointer' }}
            >
                Create Game
            </button>
            <button 
                type="button" 
                onClick={() => navigate('/game/join')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Join Game
            </button>  
        </div>
    );
}

export default GameMenu;
