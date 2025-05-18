"use client"; // if using in Next.js app directory

import TeamStatsTable from "./components/Table/TeamStatsTable";

const teams = [
  {
    name: "Falcons",
    gp: 20,
    wins: 14,
    losses: 5,
    overtimeLosses: 1,
    gf: 68,
    ga: 42,
    streak: "W3",
    last10: "7-2-1",
  },
  {
    name: "Wolves",
    gp: 20,
    wins: 12,
    losses: 6,
    overtimeLosses: 2,
    gf: 60,
    ga: 50,
    streak: "L2",
    last10: "5-4-1",
  },
  {
    name: "Spearheads",
    gp: 20,
    wins: 11,
    losses: 13,
    overtimeLosses: 6,
    gf: 48,
    ga: 62,
    streak: "W3",
    last10: "4-5-1",
  },
  {
    name: "Power",
    gp: 20,
    wins: 2,
    losses: 16,
    overtimeLosses: 2,
    gf: 30,
    ga: 90,
    streak: "L5",
    last10: "1-7-2",
  },
];

export default function Home() {
  return (
    <div className="main-container">
      <div className="p-4 border border-black ">
        {" "}
        <h1 className="text-xl font-bold mb-4">League Standings</h1>
        <TeamStatsTable teams={teams} />
      </div>
    </div>
  );
}
