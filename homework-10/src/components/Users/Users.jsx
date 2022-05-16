import { Link as RouterLink } from "react-router-dom";
import UsersList from "./UsersList/UsersList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers, removeUserById } from "../../redux/actions/actions";

function Users() {
  let users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const onUserDelete = (id) => {
    dispatch(removeUserById(id));
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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

      <UsersList list={users} onDelete={onUserDelete} />
    </>
  );
}

export default Users;
