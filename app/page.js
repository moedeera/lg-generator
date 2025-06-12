"use client"; // if using in Next.js app directory

import StandingsTables from "./components/StandingsTable/StandingsTable";
import TeamStatsTable from "./components/Table/TeamStatsTable";
const teamData = {
  "Eastern Conference": {
    "East Coast": [
      { name: "New York", record: { wins: 50, losses: 32 } },
      { name: "Brooklyn", record: { wins: 45, losses: 37 } },
      { name: "Philadelphia", record: { wins: 42, losses: 40 } },
      { name: "Boston", record: { wins: 40, losses: 42 } },
      { name: "Washington", record: { wins: 30, losses: 52 } },
    ],
    "North East": [
      { name: "Toronto", record: { wins: 48, losses: 34 } },
      { name: "Cleveland", record: { wins: 44, losses: 38 } },
      { name: "Buffalo *", record: { wins: 41, losses: 41 } },
      { name: "Detroit", record: { wins: 35, losses: 47 } },
      { name: "Chicago", record: { wins: 33, losses: 49 } },
    ],
    "East Central": [
      { name: "Milwaukee", record: { wins: 55, losses: 27 } },
      { name: "Indiana", record: { wins: 50, losses: 32 } },
      { name: "Minnesota", record: { wins: 43, losses: 39 } },
      { name: "Kansas", record: { wins: 36, losses: 46 } },
      { name: "Memphis", record: { wins: 30, losses: 52 } },
    ],
    "South East": [
      { name: "Miami", record: { wins: 46, losses: 36 } },
      { name: "Orlando", record: { wins: 45, losses: 37 } },
      { name: "Charlotte", record: { wins: 38, losses: 44 } },
      { name: "Atlanta", record: { wins: 36, losses: 46 } },
      { name: "New Orleans", record: { wins: 32, losses: 50 } },
    ],
  },
  "Western Conference": {
    Montana: [
      { name: "Wickentaw D", record: { wins: 51, losses: 31 } },
      { name: "Wickentaw C", record: { wins: 47, losses: 35 } },
      { name: "Montana S", record: { wins: 43, losses: 39 } },
      { name: "Montana C", record: { wins: 40, losses: 42 } },
      { name: "Lancia", record: { wins: 36, losses: 46 } },
    ],
    Northwest: [
      { name: "Portland", record: { wins: 48, losses: 34 } },
      { name: "Royville *", record: { wins: 45, losses: 37 } },
      { name: "Denver", record: { wins: 44, losses: 38 } },
      { name: "Vancouver *", record: { wins: 40, losses: 42 } },
      { name: "Middleton*", record: { wins: 33, losses: 49 } },
    ],
    "West Coast": [
      { name: "Los Angeles's C", record: { wins: 50, losses: 32 } },
      { name: "Los Angeles's L", record: { wins: 48, losses: 34 } },
      { name: "Golden State", record: { wins: 46, losses: 36 } },
      { name: "Sacramento", record: { wins: 42, losses: 40 } },
      { name: "Utah", record: { wins: 35, losses: 47 } },
    ],
    "South West": [
      { name: "Dallas", record: { wins: 53, losses: 29 } },
      { name: "San Antonio", record: { wins: 47, losses: 35 } },
      { name: "Houston", record: { wins: 41, losses: 41 } },
      { name: "Phoenix", record: { wins: 40, losses: 42 } },
      { name: "Oklahoma", record: { wins: 37, losses: 45 } },
    ],
  },
};

export default function Home() {
  return (
    <div className="main-container">
      <div className="p-4  ">
        {" "}
        <h1 className="text-xl font-bold mb-4 text-white">League Standings</h1>
        <TeamStatsTable />
        <StandingsTables data={teamData} />
      </div>
    </div>
  );
}
