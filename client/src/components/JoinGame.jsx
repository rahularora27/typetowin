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
    <div className="flex justify-center">
      <div className="w-2/3 mt-8">
        <h1 className="text-3xl font-bold text-center mb-4">Join Game</h1>
        <form onSubmit={onSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="gameID" className="block text-gray-700">Enter Game ID</label>
            <input
              type="text"
              name="gameID"
              value={userInput.gameID}
              onChange={onChange}
              placeholder="Enter Game ID"
              className="form-input mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nickName" className="block text-gray-700">Enter Nick Name</label>
            <input
              type="text"
              name="nickName"
              value={userInput.nickName}
              onChange={onChange}
              placeholder="Enter Nick Name"
              className="form-input mt-1 block w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinGame;
