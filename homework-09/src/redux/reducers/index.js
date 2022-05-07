import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../../constants";

const INITIAL_STATE = {
  todos: [
    { id: 1, title: "Learn React", isCompleted: true },
    { id: 2, title: "Learn Redux", isCompleted: false },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, title, isCompleted } = action.payload;
      const newTodos = [];
      newTodos.push(...state.todos, { id, title, isCompleted });
      return { todos: newTodos };
    }

    case TOGGLE_TODO: {
      const newTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      return { todos: newTodos };
    }

    case DELETE_TODO: {
      const newTodos = state.todos.filter((todo) => todo.id !== action.id);
      return { todos: newTodos };
    }

    default:
      return state;
  }
};

export default reducer;
