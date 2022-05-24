import { Dialog } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TodosForm from "../Todos/TodosForm";

export default function TodoModal() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <Dialog
      onClose={handleClose}
      open={location.pathname === "/create" ? true : false}
    >
      <TodosForm />
    </Dialog>
  );
}
