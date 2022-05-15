import UsersListItem from "../UsersListItem/UsersListItem";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function UsersList({ list, onDelete }) {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(231, 235, 240)",
        padding: "24px",
        borderRadius: "10px",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Website</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((user) => (
              <UsersListItem key={user.id} item={user} onDelete={onDelete} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default UsersList;
