import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
function TodosListItem(props) {
  const { id, title, status } = props.data;


  return (
    <ListItem
      sx={{ backgroundColor: status ? "#ecffec" : "#fff" }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          // onClick={() => handleDeleteClick(id)}
        >
          <DeleteIcon sx={{ color: "#ff7474" }} />
        </IconButton>
      }
      disablePadding
      // onClick={() => handleToggleClick(props.data)}
      className={status ? "is-active" : ""}
    >
      <ListItemButton>
        <ListItemIcon>
          <Checkbox checked={status} />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
}

export default TodosListItem;
