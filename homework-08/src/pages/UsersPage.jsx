import { Link as RouterLink, Outlet } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";

function UsersPage() {
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
      <Outlet />
    </>
  );
}

export default UsersPage;
