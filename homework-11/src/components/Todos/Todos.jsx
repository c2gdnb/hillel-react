import TodosList from "./TodosList";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Modal from "../common/Modal";
import Loading from "../common/Loading";
import useTodos from "../../hooks/useTodos";
import TodosProgress from "./TodosProgress";

export default function Todos() {
  const { todos, isLoading, removeTodo, toggleTodo } = useTodos();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: "24px" }}>
        {isLoading ? (
          <Loading />
        ) : (
          <Grid container spacing={2}>
            <Grid item md={9} xs={12}>
              <Box
                sx={{
                  backgroundColor: "#d9eaff",
                  p: "24px",
                  borderRadius: "10px",
                }}
              >
                <TodosList
                  todos={todos}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                />
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <TodosProgress todos={todos} />
            </Grid>
          </Grid>
        )}
      </Container>
      <Modal />
    </>
  );
}
