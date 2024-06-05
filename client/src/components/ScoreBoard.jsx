import React from 'react';

const getScoreboard = (players) => {
    const scoreBoard = players.filter(player => player.WPM !== -1);
    return scoreBoard.sort((a, b) => a.WPM > b.WPM ? -1 : b.WPM > a.WPM ? 1 : 0);
}

const ScoreBoard = ({ players }) => {
    const scoreBoard = getScoreboard(players);
    if (scoreBoard.length === 0)
        return null;
    return (
        <table className="min-w-full divide-y divide-gray-200 my-3">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WPM</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {
                    scoreBoard.map((player, index) => {
                        return (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{player.nickName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{player.WPM}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ScoreBoard;
