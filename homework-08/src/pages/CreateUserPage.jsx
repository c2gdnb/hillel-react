import useUsers from "../hooks/useUsers";
import UsersForm from "../components/Users/UsersForm/UsersForm";
import Loading from "../components/common/Loading";
import Typography from "@mui/material/Typography";

export default function CreateUserPage() {
  const { isLoading } = useUsers();

  return (
    <>
      <Typography variant="h2" component="h1">
        Add user
      </Typography>

      {isLoading ? <Loading /> : <UsersForm />}
    </>
  );
}
