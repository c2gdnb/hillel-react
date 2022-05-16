import { ADD_USER, SET_USERS } from "../actions/actions";

const INITIAL_STATE = {
  users: []
};

export default function todosReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_USERS:
      return { ...state, users: [...payload] };

    case ADD_USER:
      const newUser = { id: Date.now(), ...payload };
      return { ...state, users: [...state.users, newUser] };

    default:
      return state;
  }
}
