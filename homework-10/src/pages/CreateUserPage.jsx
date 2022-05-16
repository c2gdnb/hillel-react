import UsersForm from "../components/Users/UsersForm/UsersForm";
import Typography from "@mui/material/Typography";

export default function CreateUserPage() {
  return (
    <>
      <Typography variant="h2" component="h1" sx={{ mb: "20px" }}>
        Add user
      </Typography>

      <UsersForm />
    </>
  );
}
