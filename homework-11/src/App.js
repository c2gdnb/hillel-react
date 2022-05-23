import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppHeader from "./components/common/AppHeader";
import Todos from "./components/Todos/Todos";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppHeader />
        <Todos />
        {/* <Routes>
          <Todos />
        </Routes> */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
