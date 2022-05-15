import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import UsersForm from "../components/Users/UsersForm/UsersForm";
import Loading from "../components/common/Loading";
import useUsers from "../hooks/useUsers";

export default function EditUserPage() {
  const { userId } = useParams();
  const { user, isLoading } = useUser(userId);
  const { updateUser } = useUsers();

  return (
    <>
      <Typography variant="h2" component="h1">
        Edit user
      </Typography>

      {isLoading ? <Loading /> : <UsersForm user={user} userId={userId} updateUser={updateUser} />}
    </>
  );
}
