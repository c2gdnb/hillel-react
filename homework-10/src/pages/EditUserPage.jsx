import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import UsersForm from "../components/Users/UsersForm/UsersForm";
import Typography from "@mui/material/Typography";

export default function EditUserPage() {
  const { userId } = useParams();
  let user = useSelector((state) =>
    state.users.filter((userItem) => userItem.id === userId)
  );

  return (
    <>
      <Typography variant="h2" component="h1" sx={{ mb: "20px" }}>
        Edit user
      </Typography>

      <UsersForm user={user[0]} userId={userId} />
    </>
  );
}
