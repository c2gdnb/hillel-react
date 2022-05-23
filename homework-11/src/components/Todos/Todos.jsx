import TodosList from "./TodosList";
// import TodosForm from "./TodosForm";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Todos() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: "24px" }}>
        <Grid container spacing={2}>
          <Grid item md={9}>
            <Box
              sx={{
                backgroundColor: "#d9eaff",
                p: "24px",
                borderRadius: "10px",
              }}
            >
              <TodosList />
              {/* <TodosList />
          <TodosForm /> */}
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box
              sx={{
                backgroundColor: "black",
                p: "24px",
                borderRadius: "10px",
              }}
            >
              {/* <TodosList />
          <TodosForm /> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
