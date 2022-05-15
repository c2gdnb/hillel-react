import { Link as RouterLink } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import Loading from "../common/Loading";
import UsersList from "./UsersList/UsersList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Users() {
  const { users, isLoading, deleteUser } = useUsers();

  const onUserDelete = (user) => {
    deleteUser(user.id);
  };

  return (
    <>
      <Box sx={{ display: "flex", mb: "21px" }}>
        <Typography variant="h2" component="h1">
          Users
        </Typography>

        <Link
          component={RouterLink}
          to={"createuser"}
          sx={{ ml: "auto" }}
          title="Add user"
        >
          <AddCircleIcon sx={{ width: "72px", height: "72px" }} />
        </Link>
      </Box>
      {isLoading ? (
        <Loading />
      ) : (
        <UsersList list={users} onDelete={onUserDelete} />
      )}
    </>
  );
}

export default Users;
