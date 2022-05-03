import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function UsersListItem({ item, onDelete }) {
  const onDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const confirm = window.confirm(
      `Are you sure? This will permanently delete user ${item.name}`
    );

    if (confirm) {
      onDelete(item);
    }
  };

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.phone}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>{item.website}</TableCell>
        <TableCell>
          <Link
            component={RouterLink}
            to={String(item.id)}
            title="Click to Edit"
          >
            <EditIcon fontSize="small" />
          </Link>
        </TableCell>
        <TableCell>
          <Link onClick={onDeleteClick} title="Click to Delete">
            <DeleteIcon fontSize="small" color="warning" />
          </Link>
        </TableCell>
      </TableRow>
    </>
  );
}

export default UsersListItem;
