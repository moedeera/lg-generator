export const playoffData = {
  "Eastern Conference": [
    { name: "Milwaukee", seed: 1, wins: 4, losses: 2 },
    { name: "Miami", seed: 8, wins: 2, losses: 4 },
    { name: "New York", seed: 4, wins: 3, losses: 4 },
    { name: "Toronto", seed: 5, wins: 4, losses: 3 },
    { name: "Indiana", seed: 3, wins: 4, losses: 1 },
    { name: "Brooklyn", seed: 6, wins: 1, losses: 4 },
    { name: "Philadelphia", seed: 2, wins: 4, losses: 0 },
    { name: "Cleveland", seed: 7, wins: 0, losses: 4 },
  ],
  "Western Conference": [
    { name: "Dallas", seed: 1, wins: 4, losses: 1 },
    { name: "Montana S", seed: 8, wins: 1, losses: 4 },
    { name: "Golden State", seed: 4, wins: 4, losses: 2 },
    { name: "Wickentaw D", seed: 5, wins: 2, losses: 4 },
    { name: "Los Angeles's C", seed: 3, wins: 4, losses: 3 },
    { name: "Denver", seed: 6, wins: 3, losses: 4 },
    { name: "Portland", seed: 2, wins: 4, losses: 1 },
    { name: "San Antonio", seed: 7, wins: 1, losses: 4 },
  ],
};

export default function UnifiedPlayoffBracketVertical() {
  const TeamRow = ({ team, isWinner }) => (
    <div
      className={`flex items-center justify-between px-2 py-1 rounded ${
        isWinner ? "bg-green-500 text-white" : "bg-slate-300 text-black"
      } text-xs w-44`}
    >
      <span className="font-bold mr-2">#{team.seed}</span>
      <span className="flex-grow text-center">{team.name}</span>
      <span className="font-semibold ml-2">{team.wins}</span>
    </div>
  );

  const renderMatchup = (teamA, teamB) => {
    const winner = teamA.wins > teamB.wins ? teamA : teamB;
    const loser = teamA.wins > teamB.wins ? teamB : teamA;
    return (
      <div className="mb-4">
        <TeamRow team={winner} isWinner />
        <TeamRow team={loser} isWinner={false} />
      </div>
    );
  };

  const renderRound = (teams, label) => {
    const matchups = [];
    for (let i = 0; i < teams.length; i += 2) {
      matchups.push(renderMatchup(teams[i], teams[i + 1]));
    }
    return (
      <div className="flex flex-col items-center mb-6">
        <h3 className="text-center font-bold mb-2 text-xs">{label}</h3>
        {matchups}
      </div>
    );
  };

  const finals = {
    east: { name: "Milwaukee", seed: 1, wins: 4 },
    west: { name: "Dallas", seed: 1, wins: 2 },
  };

  return (
    <div className="flex flex-col items-center space-y-10 p-4">
      <h2 className="text-xl font-bold text-center">2025 Playoff Bracket</h2>

      {/* EASTERN CONFERENCE BRACKET */}
      <div className="flex space-x-4">
        {renderRound(playoffData["Eastern Conference"], "East R1")}
        {renderRound(
          [
            { name: "Milwaukee", seed: 1, wins: 4 },
            { name: "Toronto", seed: 5, wins: 2 },
            { name: "Indiana", seed: 3, wins: 4 },
            { name: "Philadelphia", seed: 2, wins: 4 },
          ],
          "East R2"
        )}
        {renderRound(
          [
            { name: "Milwaukee", seed: 1, wins: 4 },
            { name: "Philadelphia", seed: 2, wins: 2 },
          ],
          "East Finals"
        )}
      </div>

      {/* FINALS */}
      <div className="flex flex-col items-center">
        <h3 className="text-xs font-bold mb-2 text-center">Finals</h3>
        <TeamRow team={finals.east} isWinner />
        <TeamRow team={finals.west} isWinner={false} />
      </div>

      {/* WESTERN CONFERENCE BRACKET */}
      <div className="flex space-x-4">
        {renderRound(playoffData["Western Conference"], "West R1")}
        {renderRound(
          [
            { name: "Dallas", seed: 1, wins: 4 },
            { name: "Golden State", seed: 4, wins: 2 },
            { name: "Los Angeles's C", seed: 3, wins: 4 },
            { name: "Portland", seed: 2, wins: 2 },
          ],
          "West R2"
        )}
        {renderRound(
          [
            { name: "Dallas", seed: 1, wins: 4 },
            { name: "Los Angeles's C", seed: 3, wins: 3 },
          ],
          "West Finals"
        )}
      </div>
    </div>
  );
}
