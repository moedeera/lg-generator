"use client"; // if using in Next.js app directory

import { bracket, teamData } from "@/assets/info";
import BracketGrid from "./components/Bracket/Bracket";
import ConferenceStandings from "./components/ConferenceStandings/ConferenceStandings";
import PlayoffBracket from "./components/PlayoffBracket/PlayoffBracket";
import StandingsTables from "./components/StandingsTable/StandingsTable";
import TeamStatsTable from "./components/Table/TeamStatsTable";
import StandingsView from "./components/StandingsView/StandingsView";
import SeasonSelection from "./components/SeasonSelection/SeasonSelection";

export default function Home() {
  return (
    <div className="main-container">
      <div className="p-4  ">
        {" "}
        <h1 className="text-xl font-bold mb-4 text-white text-center">
          League Archives
        </h1>
        <SeasonSelection />
        <StandingsView />
        {/* <TeamStatsTable /> */}
        {/* <PlayoffBracket /> */}
      </div>
    </div>
  );
}
