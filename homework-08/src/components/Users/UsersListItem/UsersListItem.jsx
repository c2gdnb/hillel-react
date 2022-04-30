import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function UsersListItem({ item }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.phone}</TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.email}</TableCell>
    </TableRow>
  );
}

export default UsersListItem;
