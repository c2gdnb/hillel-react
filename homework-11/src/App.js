import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppHeader from "./components/common/AppHeader";
import Todos from "./components/Todos/Todos";
import store from "./redux/store";
import Modal from "./components/common/Modal";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppHeader />
        <Routes>
          <Route path={"/"} element={<Todos />}>
            <Route path="create" element={<Modal />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
