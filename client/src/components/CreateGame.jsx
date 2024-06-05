import React, { useState } from 'react';
import socket from '../config/socketConfig';

const CreateGame = (props) => {
    const [nickName, setNickName] = useState("");

    const onChange = (e) => {
        setNickName(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        socket.emit('create-game', nickName);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">New Game</h1>
                <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="nickName" className="block text-gray-700 text-sm font-bold mb-2">Enter a Name</label>
                        <input
                            type="text"
                            name="nickName"
                            value={nickName}
                            onChange={onChange}
                            placeholder="Name"
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
                    >
                        Create Room
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateGame;
