import React, { useState } from 'react';
import socket from '../config/socketConfig';

const JoinGame = (props) => {
  const [userInput, setUserInput] = useState({ gameID: '', nickName: '' });

  const onChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    socket.emit('join-game', userInput);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Join Game</h1>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="nickName" className="block text-gray-700 text-sm font-bold mb-2">Enter a Name</label>
            <input
              type="text"
              name="nickName"
              value={userInput.nickName}
              onChange={onChange}
              placeholder="Name"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="gameID" className="block text-gray-700 text-sm font-bold mb-2">Enter Game ID</label>
            <input
              type="text"
              name="gameID"
              value={userInput.gameID}
              onChange={onChange}
              placeholder="Game ID"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
          >
            Join Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinGame;
