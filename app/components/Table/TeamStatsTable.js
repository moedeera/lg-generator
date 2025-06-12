import { Card, CardContent } from "../../../components/ui/card";

const teamData = {
  "Eastern Conference": {
    "East Coast": [
      "New York",
      "Brooklyn",
      "Philadelphia",
      "Boston",
      "Washington",
    ],
    "North East": ["Toronto", "Cleveland", "Buffalo *", "Detroit", "Chicago"],
    "East Central": ["Milwaukee", "Indiana", "Minnesota", "Kansas", "Memphis"],
    "South East": ["Miami", "Orlando", "Charlotte", "Atlanta", "New Orleans"],
  },
  "Western Conference": {
    Montana: ["Wickentaw D", "Wickentaw C", "Montana S", "Montana C", "Lancia"],
    Northwest: [
      "Portland",
      "Royville *",
      "Denver",
      "Vancouver *",
      "Middleton*",
    ],
    "West Coast": [
      "Los Angeles's C",
      "Los Angeles's L",
      "Golden State",
      "Sacramento",
      "Utah",
    ],
    "South West": ["Dallas", "San Antonio", "Houston", "Phoenix", "Oklahoma"],
  },
};

export default function TeamTables() {
  return (
    <div className="grid gap-6 p-6">
      {Object.entries(teamData).map(([regionGroup, divisions]) => (
        <div key={regionGroup}>
          <h2 className="text-2xl font-bold mb-4 text-white">{regionGroup}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(divisions).map(([division, teams]) => (
              <Card key={division} className="bg-sky-800">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{division}</h3>
                  <ol className="list-decimal list-inside space-y-1">
                    {teams.map((team, idx) => (
                      <li key={idx}>{team}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
