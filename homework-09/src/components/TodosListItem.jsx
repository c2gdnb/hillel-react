import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { toggleTodo, deleteTodo } from "../redux/actions/index";
import { useDispatch } from "react-redux";

function TodosListItem(props) {
  const { id, title, isCompleted } = props.data;
  const dispatch = useDispatch();

  function handleDeleteClick(id) {
    dispatch(deleteTodo(id));
  }

  function handleToggleClick(todo) {
    dispatch(toggleTodo(todo));
  }

  return (
    <ListItem
      sx={{ backgroundColor: isCompleted ? "#ecffec" : "#fff" }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => handleDeleteClick(id)}
        >
          <DeleteIcon sx={{ color: "#ff7474" }} />
        </IconButton>
      }
      disablePadding
      onClick={() => handleToggleClick(props.data)}
      className={isCompleted ? "is-active" : ""}
    >
      <ListItemButton>
        <ListItemIcon>
          <Checkbox checked={isCompleted} />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
}

export default TodosListItem;
