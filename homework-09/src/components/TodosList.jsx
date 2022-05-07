import { useSelector } from "react-redux";
import TodosListItem from "./TodosListItem";
import List from "@mui/material/List";

function TodosList() {
  const todos = useSelector((state) => state.todos);

  return (
    <List sx={{ mb: "12px" }}>
      {todos.map((todo) => (
        <TodosListItem key={todo.id} data={todo} />
      ))}
    </List>
  );
}

export default TodosList;
