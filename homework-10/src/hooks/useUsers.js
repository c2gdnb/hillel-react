import { useEffect, useState } from "react";
import { getUsersList } from "../services/usersService";
import { useBooleanFlag } from "./common";
import { apiUsers } from "../api/api";
import { USERS_URI } from "../constants";
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
  }, []);

  function addUser(user) {
    apiUsers
      .post(USERS_URI, user)
      .then(({ data }) => setUsers((users) => [...users, data]))
      .then(() => navigate("/"));
  }

  function deleteUser(id) {
    apiUsers.delete(`${USERS_URI}/${id}`);
    setUsers(users.filter((item) => item.id !== id));
  }

  function updateUser(user) {
    apiUsers
      .put(`${USERS_URI}/${user.id}`, user)
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
    deleteUser,
    updateUser,
  };
}
