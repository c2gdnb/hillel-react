import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function TodosListItem(props) {
  const { title, status, id } = props.data;
  const newTodo = { ...props.data, status: !props.data.status };

  function handleDeleteClick(event) {
    event.stopPropagation();
    props.removeTodo(id);
  }

  function handleToggleClick(todo) {
    props.toggleTodo(todo);
  }

  return (
    <ListItem
      sx={{ backgroundColor: status ? "#ecffec" : "#fff" }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={handleDeleteClick}
        >
          <DeleteIcon sx={{ color: "#ff7474" }} />
        </IconButton>
      }
      disablePadding
      onClick={() => handleToggleClick(newTodo)}
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
