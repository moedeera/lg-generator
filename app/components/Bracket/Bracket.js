export default function BracketGrid({ bracket }) {
  const renderMatch = ({ teams, seeds, result }) => {
    const [team1, team2] = teams;
    const [seed1, seed2] = seeds;
    const [score1, score2] = result;
    const winnerIndex = score1 > score2 ? 0 : 1;

    return (
      <div className="w-40 border border-gray-300 text-xs bg-white rounded shadow">
        <div
          className={`flex justify-between px-2 py-1 ${
            winnerIndex === 0 ? "font-bold" : ""
          }`}
        >
          <span>{`#${seed1} ${team1}`}</span>
          <span>{score1}</span>
        </div>
        <div
          className={`flex justify-between px-2 py-1 ${
            winnerIndex === 1 ? "font-bold" : ""
          }`}
        >
          <span>{`#${seed2} ${team2}`}</span>
          <span>{score2}</span>
        </div>
      </div>
    );
  };

  const renderColumn = (matches = [], label = "") => (
    <div className="flex flex-col items-center gap-3 ">
      {label && <h4 className="text-xs font-semibold text-white">{label}</h4>}
      {matches.map((match, idx) => (
        <div key={idx}>{renderMatch(match)}</div>
      ))}
    </div>
  );

  // Split east/west for each round
  const splitRound = (roundKey) => {
    const east = bracket[roundKey].filter((m) => m.conf === "east");
    const west = bracket[roundKey].filter((m) => m.conf === "west");
    return { east, west };
  };

  const round1 = splitRound("round1");
  const round2 = splitRound("round2");
  const round3 = splitRound("round3");
  const finals = bracket.finals;

  return (
    <div className="overflow-x-auto p-6 w-full">
      <div className="flex items-start justify-start gap-8  ">
        {/* Round 1 */}
        <div className="flex flex-col justify-center ">
          <div>{renderColumn(round1.east, "East R1")}</div>
          <div>{renderColumn(round1.west, "West R1")}</div>
        </div>

        {/* Round 2 */}
        <div className="flex flex-col my-auto  gap-18">
          <div>{renderColumn(round2.east, "East R2")}</div>
          <div>{renderColumn(round2.west, "West R2")}</div>
        </div>

        {/* Round 3 */}
        <div className="flex flex-col my-auto justify-center gap-20">
          <div>{renderColumn(round3.east, "East Finals")}</div>
          <div>{renderColumn(round3.west, "West Finals")}</div>
        </div>

        {/* Finals */}
        <div className="flex flex-col my-auto justify-center gap-10">
          {renderColumn(finals, "Finals")}
        </div>
      </div>
    </div>
  );
}
