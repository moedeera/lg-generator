"use client"; // if using in Next.js app directory
import React from "react";
import "./TeamStatsTable.css";

const TeamStatsTable = ({ teams }) => {
  // Calculate points and sort teams by it
  const sortedTeams = [...teams].sort((a, b) => {
    const pointsA = a.wins * 2 + a.overtimeLosses;
    const pointsB = b.wins * 2 + b.overtimeLosses;
    return pointsB - pointsA;
  });

  return (
    <div className="overflow-x-auto table-container">
      <table className="min-w-full text-sm md:text-base text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Team</th>
            <th className="p-2">GP</th>
            <th className="p-2">W</th>
            <th className="p-2">L</th>
            <th className="p-2 hidden md:table-cell">OT</th>
            <th className="p-2 hidden md:table-cell">GF</th>
            <th className="p-2 hidden md:table-cell">GA</th>
            <th className="p-2">PTS</th>
            <th className="p-2 hidden md:table-cell">Streak</th>
            <th className="p-2 hidden md:table-cell">Last 10</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((team, index) => {
            const points = team.wins * 2 + team.overtimeLosses;
            return (
              <tr
                key={index}
                className="border-t even:bg-gray-50 hover:bg-gray-100"
              >
                <td className="p-2 font-medium">{team.name}</td>
                <td className="p-2">{team.gp}</td>
                <td className="p-2">{team.wins}</td>
                <td className="p-2">{team.losses}</td>
                <td className="p-2 hidden md:table-cell">
                  {team.overtimeLosses}
                </td>
                <td className="p-2 hidden md:table-cell">{team.gf}</td>
                <td className="p-2 hidden md:table-cell">{team.ga}</td>
                <td className="p-2 font-bold">{points}</td>
                <td className="p-2 hidden md:table-cell">{team.streak}</td>
                <td className="p-2 hidden md:table-cell">{team.last10}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TeamStatsTable;
