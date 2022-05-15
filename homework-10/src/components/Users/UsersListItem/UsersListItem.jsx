import Link from "@mui/material/Link";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

function UsersListItem({ item, onDelete }) {
  const navigate = useNavigate();

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

  const handleOnRowClick = (userid) => {
    return navigate(String(userid));
  };

  return (
    <>
      <TableRow
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        onClick={() => handleOnRowClick(item.id)}
      >
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.surname}</TableCell>
        <TableCell>{item.phone}</TableCell>
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
