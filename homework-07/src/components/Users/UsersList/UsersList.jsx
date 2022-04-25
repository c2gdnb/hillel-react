import { Link } from "react-router-dom";
import UsersListItem from "../UsersListItem/UsersListItem";
import homeIcon from "../../../assets/home.png";

function UsersList(props) {
  const { users } = props;

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
