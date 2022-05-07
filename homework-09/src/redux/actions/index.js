import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../../constants";

let nextTodoId = 2;

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    title,
    isCompleted: false
  },
});

export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload
});

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  };
};
