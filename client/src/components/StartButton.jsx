import React, { useState } from 'react';
import socket from '../config/socketConfig';

const StartButton = ({ player, gameID }) => {
    const [showBtn, setShowBtn] = useState(true);
    const { isPartyLeader } = player;

    const onClickHandler = () => {
        socket.emit('timer', { playerID: player._id, gameID });
        setShowBtn(false);
    }

    return (
        isPartyLeader && showBtn ? (
            <div className="flex justify-center">
                <button
                    type="button"
                    onClick={onClickHandler}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    style={{ cursor: 'pointer' }}
                >
                    Start Game
                </button>
            </div>
        ) : null
    );
}

export default StartButton;
