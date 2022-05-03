import { useEffect, useState } from "react";
import { getUser } from "../services/usersService";

export function useUser(userId) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser(userId).then((data) => {
      setUser(data);
    });
  }, [userId]);

  return {
    user,
  };
}
