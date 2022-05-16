import {
  getUsersList,
  createUser,
  deleteUser,
  editUser,
} from "../../services/usersService";

// action types
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const SET_USERS = "SET_USERS";

// actions
export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const fetchUsers = () => {
  return function (dispatch) {
    getUsersList().then((users) => dispatch(setUsers(users)));
  };
};

export const createNewUser = (user) => {
  return function (dispatch) {
    createUser(user).then(() => {
      dispatch(addUser(user));
    });
  };
};

export const removeUserById = (id) => {
  return function (dispatch, getState) {
    deleteUser(id).then(() => {
      const { users } = getState();
      const updatedusers = users.filter((user) => user.id !== id);
      dispatch(setUsers(updatedusers));
    });
  };
};

export const updateUserItem = (user) => {
  return function (dispatch, getState) {
    const { users } = getState();

    editUser(user).then(() => {
      const updatedUsers = users.map((content) =>
        content.id === user.id ? { ...content, ...user } : content
      );

      dispatch(setUsers(updatedUsers));
    });
  };
};
