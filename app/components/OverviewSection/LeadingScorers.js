import React from "react";

function LeadingScorers() {
  const topScorers = [
    { name: "Darren Thompson", team: "Mountain Mustangs", ppg: 35.7 },
    { name: "Joel Embid", team: "River City Raptors", ppg: 34.1 },
    { name: "Luka Doncic", team: "Desert Scorpions", ppg: 32.5 },
    { name: "Giannis Antetokoumpo", team: "Metro Monarchs", ppg: 31.1 },
    { name: "Nikola Jokic", team: "Lakeview Lynx", ppg: 30.6 },
    { name: "Stefon Anderson", team: "Canyon Cyclones", ppg: 30.1 },
    { name: "Patrick Donnelley", team: "Seaside Stallions", ppg: 28.8 },
    { name: "Jayson Tatum", team: "Harbor Hawks", ppg: 27.9 },
    { name: "Kevin Durant", team: "Prairie Pythons", ppg: 27.1 },
    { name: "LeBron James", team: "Tundra Thunder", ppg: 26.1 },
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
