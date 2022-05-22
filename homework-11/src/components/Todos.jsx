// import TodosList from "./TodosList";
// import TodosForm from "./TodosForm";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Todos() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: "#d9eaff",
            p: "24px",
            m: "24px",
            borderRadius: "10px",
          }}
        >
          {/* <TodosList />
          <TodosForm /> */}
        </Box>
      </Container>
    </>
  );
}
