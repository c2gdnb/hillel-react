import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getsTodoList } from "../services/todoService";
import {
  createTodoThunk,
  deleteTodoThunk,
  setTodos,
  toogleIsLoading,
  toggleTodoThunk
} from "../redux/slices/todos";

const DEFAULT_TODO = {
  title: "",
  status: "",
};

export default function useTodos() {
  const isLoading = useSelector((state) => state.todos.isLoading);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toogleIsLoading(true));
    getsTodoList()
      .then((data) => dispatch(setTodos(data)))
      .finally(() => dispatch(toogleIsLoading(false)));
  }, [dispatch]);

  function saveTodo(todo) {
    return dispatch(createTodoThunk(todo));
  }

  function removeTodo(id) {
    return dispatch(deleteTodoThunk(id));
  }

  function toggleTodo(todo) {
    return dispatch(toggleTodoThunk(todo));
  }

  function getTodo(id) {
    let todo;
    if (id) {
      todo = todos.find((todo) => todo.id === id);
    }
    return todo || DEFAULT_TODO;
  }

  return {
    todos,
    isLoading,
    getTodo,
    saveTodo,
    toggleTodo,
    removeTodo,
  };
}
