import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/index";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function TodosForm() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (inputData === "") {
      return;
    }

    dispatch(addTodo(inputData));
    setInputData("");
  }

  return (
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
        onSubmit={handleSubmit}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add Todo"
          color="primary"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
          type="submit"
        >
          <AddCircleIcon />
        </IconButton>
      </Paper>
    </>
  );
}

export default TodosForm;
