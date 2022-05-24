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

export const fetchTodos = () => (dispatch) =>
  getsTodoList().then((todos) => dispatch(setTodos(todos)));

export const createTodoThunk = (todo) => async (dispatch, getState) => {
  const data = await createTodo(todo);
  const state = getState();
  const newTodos = [...state.todos.todos, todo];

  dispatch(setTodos(newTodos));
  return data;
};

export const toggleTodoThunk = (todo) => {
  return async function (dispatch, getState) {
    const state = getState();
    const data = await updateTodo(todo);

    const newTodos = state.todos.todos.map((item) =>
      item.id === todo.id ? { ...item, status: !item.status } : item
    );

    dispatch(setTodos(newTodos));

    return data;
  };
};

export const deleteTodoThunk = (id) => {
  return async function (dispatch, getState) {
    const data = await deleteTodo(id);
    const state = getState();
    const newTodos = state.todos.todos.filter((todo) => todo.id !== id);

    dispatch(setTodos(newTodos));
    return data;
  };
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, { payload }) => {
      state.todos = payload;
    },
    toogleIsLoading: (state, { payload }) => {
      state.isLoading = payload !== undefined ? payload : !state.isLoading;
    },
  },
});

export const { setTodos, toogleIsLoading } = todosSlice.actions;

export default todosSlice.reducer;
