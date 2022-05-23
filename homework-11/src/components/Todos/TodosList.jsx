import { useSelector } from "react-redux";
import TodosListItem from "./TodosListItem";
import List from "@mui/material/List";
import useTodos from "../../hooks/useTodos";

function TodosList() {
  const { users, isLoading, removeUser } = useTodos();

  return (
    <List sx={{ mb: "12px" }}>
      {users.map((todo) => (
        <TodosListItem key={todo.id} data={todo} />
      ))}
    </List>
  );
}

export default TodosList;
