import React from 'react';

const calculatePercentage = (player, wordsLength) => {
    if (player.currentWordIndex !== 0) {
        return ((player.currentWordIndex / wordsLength) * 100).toFixed(2) + "%"
    }
    return 0;
}

const ProgressBar = ({ player, players, wordsLength }) => {
    const percentage = calculatePercentage(player, wordsLength);

    return (
        <div>
            <div className="mb-4">
                <h5 className="text-left font-bold">{player.nickName}</h5>
                <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: percentage }}></div>
                </div>
                <p className="text-xs text-gray-600 mt-1">{percentage}</p>
            </div>
            {players.map(playerObj => {
                if (playerObj._id !== player._id) {
                    const percentage = calculatePercentage(playerObj, wordsLength);
                    return (
                        <div key={playerObj._id} className="mb-4">
                            <h5 className="text-left">{playerObj.nickName}</h5>
                            <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500" style={{ width: percentage }}></div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">{percentage}</p>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default ProgressBar;
