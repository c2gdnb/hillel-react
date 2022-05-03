import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumsPage from "./pages/AlbumsPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import AlbumContentPage from "./pages/AlbumContentPage";
import Albums from "./components/Albums/Albums";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Users from "./components/Users/Users";
import EditUserPage from "./pages/EditUserPage";
import CreateUserPage from "./pages/CreateUserPage";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <BrowserRouter>
          <Routes>
            <Route path="albums" element={<AlbumsPage />}>
              <Route index element={<Albums />} />
              <Route path=":albumId" element={<AlbumContentPage />} />
            </Route>
            <Route path={"users"} element={<UsersPage />}>
              <Route index element={<Users />} />
              <Route path={":userId"} element={<EditUserPage />} />
              <Route path={"createuser"} element={<CreateUserPage />} />
            </Route>
            <Route path={"/"} element={<DashboardPage />} />
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
