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
        <div className="flex justify-center">
            <div className="w-full max-w-md">
                <h1 className="text-center text-2xl mb-4">Create Game</h1>
                <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="nickName" className="block text-gray-700 text-sm font-bold mb-2">Enter Nick Name</label>
                        <input
                            type="text"
                            name="nickName"
                            value={nickName}
                            onChange={onChange}
                            placeholder="Enter Nick Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateGame;
