import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Users from "./components/Users/Users";
import EditUserPage from "./pages/EditUserPage";
import CreateUserPage from "./pages/CreateUserPage";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ pt: "24px" }}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<UsersPage />}>
              <Route index element={<Users />} />
              <Route path={":userId"} element={<EditUserPage />} />
              <Route path={"createuser"} element={<CreateUserPage />} />
            </Route>
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
