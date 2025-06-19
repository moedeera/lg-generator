"use client";
import { bracket, teamData } from "@/assets/info";
import React, { useState } from "react";
import StandingsTables from "../StandingsTable/StandingsTable";
import ConferenceStandings from "../ConferenceStandings/ConferenceStandings";
import BracketGrid from "../Bracket/Bracket";

function StandingsView() {
  const [view, setView] = useState("Divisions");
  const views = ["Overview", "Divisions", "Conference", "Both", "Playoffs"];
  return (
    <div>
      <div className="cursor-pointer text-white border border-white flex flex-cols gap-4 md:flex-rows flex-wrap py-4 justify-evenly">
        {views.map((type, index) => (
          <div
            key={index}
            onClick={() => {
              setView(type);
            }}
            className={
              type === view
                ? "border border-gray p-2 w-48 mx-2 text-center bg-slate-300 text-black"
                : "border border-gray p-2 w-48 mx-2 text-center bg-slate-500"
            }
          >
            {type}
          </div>
        ))}
      </div>
      <div className="">
        {(view === "Divisions" || view === "Both") && (
          <StandingsTables data={teamData} />
        )}
        {(view === "Conference" || view === "Both") && (
          <ConferenceStandings data={teamData} />
        )}
        {view == "Playoffs" && <BracketGrid bracket={bracket} />}
      </div>
    </div>
  );
}

export default StandingsView;
