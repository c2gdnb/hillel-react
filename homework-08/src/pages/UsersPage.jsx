import { Link as RouterLink } from "react-router-dom";
import Loading from "../components/common/Loading";
import UsersList from "../components/Users/UsersList/UsersList";
import useUsers from "../hooks/useUsers";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";

function UsersPage() {
  const { users, isLoading } = useUsers();
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" gutterBottom>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          component={RouterLink}
          to={"/"}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Dashboard
        </Link>
      </Breadcrumbs>
      <Typography variant="h2" component="h1" gutterBottom>
        Users
      </Typography>
      {isLoading ? <Loading /> : <UsersList list={users} />}
    </>
  );
}

export default UsersPage;
