import { Link as RouterLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GroupIcon from "@mui/icons-material/Group";
import CollectionsIcon from "@mui/icons-material/Collections";

function DashboardPage() {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" gutterBottom>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          component={RouterLink}
          to={"/albums"}
        >
          <CollectionsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Albums
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          component={RouterLink}
          to={"/users"}
        >
          <GroupIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Users
        </Link>
      </Breadcrumbs>
      <Typography variant="h2" component="h1" gutterBottom>
        Dashboard
      </Typography>
    </>
  );
}

export default DashboardPage;
