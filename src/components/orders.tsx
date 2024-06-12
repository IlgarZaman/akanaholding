import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./title";

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  where: string,
  amount: number
) {
  return { id, date, name, where, amount };
}

const rows = [
  createData(0, "16 Mar, 2019", "Elvis Presley", "Tupelo, MS", 312.44),
  createData(1, "16 Mar, 2019", "Paul McCartney", "London, UK", 866.99),
  createData(2, "16 Mar, 2019", "Tom Scholz", "Boston, MA", 100.81),
  createData(3, "16 Mar, 2019", "Michael Jackson", "Gary, IN", 654.39),
  createData(4, "15 Mar, 2019", "Bruce Springsteen", "Long Branch, NJ", 212.79),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Çalışanlar</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Ad</TableCell>
            <TableCell>Nerede</TableCell>
            <TableCell align="right">Maaş</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.where}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Daha fazla gör
      </Link>
    </React.Fragment>
  );
}
