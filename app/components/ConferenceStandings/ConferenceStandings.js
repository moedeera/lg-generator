import { Card, CardContent } from "../../../components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../../components/ui/table";

export default function ConferenceStandings({ data }) {
  return (
    <div className="space-y-10 p-6 grid lg:grid-cols-2 gap-2">
      {Object.entries(data).map(([conference, groups]) => {
        // Combine all teams in the conference with division info
        let combinedTeams = [];

        Object.entries(groups).forEach(([division, teams]) => {
          // Sort each division to determine top 4
          const sorted = [...teams].sort(
            (a, b) => a.record.wins - b.record.wins
          );
          sorted.forEach((team, index) => {
            combinedTeams.push({
              ...team,
              division,
              isTop4: index < 4,
            });
          });
        });

        // Sort full conference table by wins
        combinedTeams.sort((a, b) => b.record.wins - a.record.wins);

        return (
          <Card key={conference} className="bg-slate-400">
            <CardContent className="p-0 ">
              <h2 className="text-2xl font-bold mb-4 px-6 pt-6 ">
                {conference}
              </h2>
              <Table className="bg-slate-500 text-white rounded-md overflow-hidden">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">#</TableHead>
                    <TableHead className="text-white">Team</TableHead>
                    <TableHead className="text-white">Division</TableHead>
                    <TableHead className="text-white">Wins</TableHead>
                    <TableHead className="text-white">Losses</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {combinedTeams.map((team, index) => (
                    <TableRow
                      key={team.name}
                      className={team.isTop4 ? "bg-slate-400 text-black" : ""}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{team.name}</TableCell>
                      <TableCell>{team.division}</TableCell>
                      <TableCell>{team.record.wins}</TableCell>
                      <TableCell>{team.record.losses}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
