import { Card, CardContent } from "../../../components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../../components/ui/table";

export default function StandingsTables({ data }) {
  return (
    <div className="space-y-10 p-6 text-xs">
      {Object.entries(data).map(([conference, groups]) => (
        <div key={conference}>
          <h2 className="text-sm font-bold mb-6 text-white">{conference}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(groups).map(([group, teams]) => {
              const sortedTeams = [...teams].sort(
                (a, b) => b.record.wins - a.record.wins
              );

              return (
                <Card key={group} className="bg-slate-500">
                  <CardContent className="p-4">
                    <h3 className="text-sm font-semibold mb-4">{group}</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Team</TableHead>
                          <TableHead>Wins</TableHead>
                          <TableHead>Losses</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sortedTeams.map((team) => (
                          <TableRow key={team.name}>
                            <TableCell>{team.name}</TableCell>
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
        </div>
      ))}
    </div>
  );
}
