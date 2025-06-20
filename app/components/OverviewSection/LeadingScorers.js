import React from "react";

function LeadingScorers() {
  const topScorers = [
    { name: "Jalen Storm", team: "Mountain Mustangs", ppg: 29.7 },
    { name: "Tyrone Blaze", team: "River City Raptors", ppg: 28.9 },
    { name: "Eli Thunder", team: "Desert Scorpions", ppg: 27.5 },
    { name: "Marcus Vale", team: "Metro Monarchs", ppg: 26.2 },
    { name: "Zion Quest", team: "Lakeview Lynx", ppg: 25.6 },
    { name: "Devon Ridge", team: "Canyon Cyclones", ppg: 24.8 },
    { name: "Andre Peaks", team: "Seaside Stallions", ppg: 24.1 },
    { name: "Chris Volt", team: "Harbor Hawks", ppg: 23.9 },
    { name: "Nico Frost", team: "Prairie Pythons", ppg: 23.4 },
    { name: "Tariq Moon", team: "Tundra Thunder", ppg: 22.7 },
  ];
  const ScorersTable = ({ scorers }) => (
    <table className="w-full text-left border-collapse bg-amber-200 text-sm">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">Rank</th>
          <th className="p-2">Player</th>
          <th className="p-2">Team</th>
          <th className="p-2">PPG</th>
        </tr>
      </thead>
      <tbody>
        {scorers.map((p, index) => (
          <tr key={p.name} className="border-b hover:bg-gray-50">
            <td className="p-2 font-semibold">{index + 1}</td>
            <td className="p-2">{p.name}</td>
            <td className="p-2">{p.team}</td>
            <td className="p-2">{p.ppg.toFixed(1)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <div>
      {" "}
      <ScorersTable scorers={topScorers} />
    </div>
  );
}

export default LeadingScorers;
