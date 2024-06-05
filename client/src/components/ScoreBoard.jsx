import React from 'react';

const getScoreboard = (players) => {
    const scoreBoard = players.filter(player => player.WPM !== -1);
    return scoreBoard.sort((a, b) => b.WPM - a.WPM);
}

const ScoreBoard = ({ players }) => {
    const scoreBoard = getScoreboard(players);

    if (scoreBoard.length === 0) {
        return null;
    }

    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-2">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WPM</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {scoreBoard.map((player, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{player.nickName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{player.WPM}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ScoreBoard;
