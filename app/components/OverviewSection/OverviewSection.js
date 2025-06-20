"use client";
import React from "react";
import LeadingScorers from "./LeadingScorers";

// ---------- Mock Regular Season Data ----------
const divisions = [
  {
    name: "Eastern Conference",
    teams: [
      { seed: 1, name: "River City Raptors", wins: 58, losses: 24 },
      { seed: 2, name: "Lakeview Lynx", wins: 52, losses: 30 },
      { seed: 3, name: "Metro Monarchs", wins: 46, losses: 36 },
      { seed: 4, name: "Harbor Hawks", wins: 44, losses: 38 },
      { seed: 5, name: "Capital Crusaders", wins: 40, losses: 42 },
      { seed: 6, name: "Prairie Pythons", wins: 38, losses: 44 },
      { seed: 7, name: "Coast Cougars", wins: 34, losses: 48 },
      { seed: 8, name: "Bay Buccaneers", wins: 30, losses: 52 },
      { seed: 9, name: "Forest Falcons", wins: 28, losses: 54 },
      { seed: 10, name: "Valley Vipers", wins: 22, losses: 60 },
    ],
  },
  {
    name: "Western Conference",
    teams: [
      { seed: 1, name: "Desert Scorpions", wins: 60, losses: 22 },
      { seed: 2, name: "Mountain Mustangs", wins: 54, losses: 28 },
      { seed: 3, name: "Canyon Cyclones", wins: 48, losses: 34 },
      { seed: 4, name: "Seaside Stallions", wins: 45, losses: 37 },
      { seed: 5, name: "Tundra Thunder", wins: 41, losses: 41 },
      { seed: 6, name: "Glacier Gulls", wins: 37, losses: 45 },
      { seed: 7, name: "Savannah Sharks", wins: 33, losses: 49 },
      { seed: 8, name: "Rainforest Raptors", wins: 29, losses: 53 },
      { seed: 9, name: "Frontier Foxes", wins: 26, losses: 56 },
      { seed: 10, name: "Echo Eagles", wins: 20, losses: 62 },
    ],
  },
];

// ---------- Mock Playoff Results ----------
const bracket = {
  east: {
    semifinals: [
      { matchup: "Raptors (1) vs Hawks (4)", result: "4–1" },
      { matchup: "Lynx (2) vs Monarchs (3)", result: "4–2" },
    ],
    finals: [{ matchup: "(1) Raptors vs Lynx (2)", result: "4–3" }],
    champion: "River City Raptors",
  },
  west: {
    semifinals: [
      { matchup: "Scorpions (1) vs Stallions (4)", result: "3–4" },
      { matchup: "Mustangs (2) vs Cyclones (3)", result: "4–0" },
    ],
    finals: [{ matchup: "(2) Mustangs vs Stallions (4)", result: "2–4" }],
    champion: "Seaside Stallions",
  },
  finals: {
    matchup: "Raptors vs Stallions",
    result: "4–2",
    champion: "River City Raptors",
  },
};

// ---------- Helper Components ----------
const StandingsTable = ({ teams }) => (
  <table className="w-full text-sm text-left border-collapse bg-slate-400">
    <thead>
      <tr className="bg-slate-100">
        <th className="p-2">Seed</th>
        <th className="p-2">Team</th>
        <th className="p-2">W</th>
        <th className="p-2">L</th>
      </tr>
    </thead>
    <tbody>
      {teams.map((t) => (
        <tr key={t.name} className="border-b hover:bg-gray-50">
          <td className="p-2 font-semibold">{t.seed}</td>
          <td className="p-2">{t.name}</td>
          <td className="p-2">{t.wins}</td>
          <td className="p-2">{t.losses}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const BracketColumn = ({ title, series }) => (
  <div className="flex flex-col gap-4 ">
    <h3 className="text-lg font-semibold text-center text-white">{title}</h3>
    {series.map((s, i) => (
      <div
        key={i}
        className="p-4 border rounded-lg shadow hover:shadow-lg transition text-center bg-slate-400"
      >
        <p className="font-medium leading-tight text-sm">{s.matchup}</p>
        <p className="text-sm text-gray-900">{s.result}</p>
      </div>
    ))}
  </div>
);

// ---------- Main Page Component ----------
export default function SeasonOverview() {
  return (
    <div className="container mx-auto p-4 space-y-12">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">2025 Season</h1>
        <p className="text-gray-200">Season Overview &amp; Playoff Results</p>
      </header>

      {/* Playoff Bracket */}
      <section>
        {/* League Finals */}
        <div className="mt-12 text-center text-white">
          <h3 className="text-xl font-semibold">Finals</h3>
          <p className="text-lg mt-2">{bracket.finals.matchup}</p>
          <p className="text-2xl font-bold">{bracket.finals.result}</p>
          <p className="mt-4 text-2xl font-extrabold">
            Champion: {bracket.finals.champion}
          </p>
        </div>
        <h2 className="text-2xl font-semibold mb-8 text-white">
          Playoff Bracket
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* East Bracket */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <BracketColumn
              title="East Semifinals"
              series={bracket.east.semifinals}
            />
            <BracketColumn title="East Finals" series={bracket.east.finals} />
            <div className="p-4 border rounded-lg shadow-lg bg-yellow-100 text-center">
              <p className="font-bold">East Champion</p>
              <p>{bracket.east.champion}</p>
            </div>
          </div>

          {/* Finals Trophy Separator */}
          <div className="text-center text-3xl font-bold">🏆</div>

          {/* West Bracket */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="p-4 border rounded-lg shadow-lg bg-yellow-100 text-center">
              <p className="font-bold">West Champion</p>
              <p>{bracket.west.champion}</p>
            </div>
            <BracketColumn title="West Finals" series={bracket.west.finals} />
            <BracketColumn
              title="West Semifinals"
              series={bracket.west.semifinals}
            />
          </div>
        </div>
      </section>

      {/* Regular Season Standings */}
      <section>
        <h2 className="text-2xl text-white font-semibold mb-4">
          Regular Season Standings
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {divisions.map((d) => (
            <div key={d.name}>
              <h3 className="text-xl text-white font-semibold mb-2">
                {d.name}
              </h3>
              <StandingsTable teams={d.teams} />
            </div>
          ))}
          <div>
            <h3 className="text-xl text-white font-semibold mb-2">
              Leading Scorers
            </h3>{" "}
            <LeadingScorers />
          </div>
        </div>
      </section>
    </div>
  );
}
