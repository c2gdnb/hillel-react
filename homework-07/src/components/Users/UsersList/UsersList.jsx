import { USERS_URI } from "../../../constants";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getContactsList } from "../../../services/service";
import UsersListItem from "../UsersListItem/UsersListItem";
import homeIcon from "../../../assets/home.png";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getContactsList(USERS_URI).then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <>
      <Link to="/" className="home-link">
        <img src={homeIcon} alt="" />
        Home
      </Link>
      <div className="cards">
        {users.map((user) => (
          <UsersListItem key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default UsersList;
