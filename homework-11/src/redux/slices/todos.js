import { createSlice } from "@reduxjs/toolkit";
import {
  createTodo,
  deleteTodo,
  getsTodoList,
  updateTodo,
} from "../../services/todoService";

const initialState = {
  isLoading: false,
  todos: [],
};

export const fetchUsers = () => (dispatch) =>
  getsTodoList().then((users) => dispatch(setUsers(users)));

export const createTodoThunk = (user) => async (dispatch, getState) => {
  const data = await createTodo(user);
  const state = getState();
  const newUsers = [...state.todos.todos, user];

  dispatch(setUsers(newUsers));
  return data;
};

export const updateTodoThunk = (user) => {
  return async function (dispatch, getState) {
    const data = await updateTodo(user);
    const state = getState();
    const newUsers = state.todos.todos.map((u) =>
      u.id === user.id ? user : u
    );
    dispatch(setUsers(newUsers));
    return data;
  };
};

export const deleteTodoThunk = (id) => {
  return async function (dispatch, getState) {
    const data = await deleteTodo(id);
    const state = getState();
    const newUsers = state.todos.todos.filter((user) => user.id !== id);
    dispatch(setUsers(newUsers));
    return data;
  };
};

export const usersSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.todos = payload;
    },
    toogleIsLoading: (state, { payload }) => {
      state.isLoading = payload !== undefined ? payload : !state.isLoading;
    },
  },
});

export const { setUsers, toogleIsLoading } = usersSlice.actions;

export default usersSlice.reducer;
