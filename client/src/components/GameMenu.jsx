import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameMenu = (props) => {
    let navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
            <div className="text-center p-10 bg-white shadow-lg rounded-lg max-w-md">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-6">typetowin</h1>
                <p className="text-lg text-gray-700 mb-8">Race with friends to improve your typing skills while having fun!</p>
                <button 
                    type="button" 
                    onClick={() => navigate('/game/create')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mr-4 transition duration-300 ease-in-out transform hover:scale-105"
                    style={{ cursor: 'pointer' }}
                >
                    New Game
                </button>
                <button 
                    type="button" 
                    onClick={() => navigate('/game/join')}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Join Game
                </button>
            </div>
        </div>
    );
}

export default GameMenu;
