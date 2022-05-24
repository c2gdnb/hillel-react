import TodosListItem from "./TodosListItem";
import List from "@mui/material/List";

function TodosList({todos, removeTodo, toggleTodo}) {
  return (
    <>
      <List>
        {todos.map((todo) => (
          <TodosListItem
            key={todo.id}
            data={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </List>
    </>
  );
}

export default TodosList;
