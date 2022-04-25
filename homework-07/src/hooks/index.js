import { USERS_URI } from "../constants";
import { ALBUMS_URI } from "../constants";
import { useEffect, useState } from "react";
import { getData } from "../services/service";

export default function useData() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getData(USERS_URI).then((data) => {
      setUsers(data);
    });

    getData(ALBUMS_URI).then((data) => {
      setAlbums(data);
    });
  }, []);

  return {
    users,
    albums,
  };
}
