import { useContext } from "react";

/* Components */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/* Contexts */
import { UserContext } from "@/context/UserContext";

export function RepositoryDetails() {
  const { repositoryDetails } = useContext(UserContext);
  if (!repositoryDetails) return;

  return (
    <main className="w-full mt-4 p-4 md:p-0">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Key</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(repositoryDetails).map((line) => (
            <TableRow key={JSON.stringify(line)}>
              <TableCell>{String(line[0])}</TableCell>
              <TableCell>{String(line[1])}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
