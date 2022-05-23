import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getsTodoList } from "../services/todoService";
import {
  createTodoThunk,
  deleteTodoThunk,
  setUsers,
  toogleIsLoading,
  updateTodoThunk,
} from "../redux/slices/todos";

const DEFAULT_USER = {
  title: "",
  status: false,
};

export default function useTodos() {
  const isLoading = useSelector((state) => state.todos.isLoading);
  const users = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toogleIsLoading(true));
    getsTodoList()
      .then((data) => dispatch(setUsers(data)))
      .finally(() => dispatch(toogleIsLoading(false)));
  }, [dispatch]);

  function saveUser(user) {
    if (user.id) {
      return dispatch(updateTodoThunk(user));
    } else {
      return dispatch(createTodoThunk(user));
    }
  }

  function removeUser(id) {
    return dispatch(deleteTodoThunk(id));
  }

  function getUser(id) {
    let user;
    if (id) {
      user = users.find((user) => user.id === id);
    }
    return user || DEFAULT_USER;
  }

  return {
    users,
    isLoading,
    getUser,
    saveUser,
    removeUser,
  };
}
