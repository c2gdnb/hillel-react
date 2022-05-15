import { useEffect, useState } from "react";
import {
  getUsersList,
  createUser,
  deleteUser,
  updateUser,
} from "../services/usersService";
import { useBooleanFlag } from "./common";
import { useNavigate } from "react-router-dom";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, toggleIsLoading] = useBooleanFlag(false);
  const navigate = useNavigate();

  useEffect(() => {
    toggleIsLoading(true);
    setError(null);
    getUsersList()
      .then((data) => setUsers(data))
      .catch((err) => setError(err))
      .finally(() => toggleIsLoading(false));
  }, [toggleIsLoading]);

  function addUser(user) {
    createUser(user)
      .then(({ data }) => setUsers((users) => [...users, data]))
      .then(() => navigate("/"));
  }

  function removeUser(id) {
    deleteUser(id).then(() => {
      setUsers((users) => users.filter((user) => user.id !== id));
    });
  }

  function editUser(user) {
    updateUser(user)
      .then(({ data }) =>
        setUsers((users) =>
          users.map((item) => (item.id === user.id ? data : item))
        )
      )
      .then(() => navigate("/"));
  }

  return {
    users,
    isLoading,
    error,
    addUser,
    removeUser,
    editUser,
  };
}
