import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Users from "./components/Users/Users";
import EditUserPage from "./pages/EditUserPage";
import CreateUserPage from "./pages/CreateUserPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ pt: "24px" }}>
        <Provider store={store}>
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
        </Provider>
      </Container>
    </>
  );
}

export default App;
