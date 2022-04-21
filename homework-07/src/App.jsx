import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UsersList from "./components/Users/UsersList/UsersList";
import AlbumsList from "./components/Albums/AlbumsList/AlbumsList";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/users">
            <UsersList />
          </Route>
          <Route path="/albums">
            <AlbumsList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
