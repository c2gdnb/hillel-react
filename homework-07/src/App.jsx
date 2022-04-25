import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import UsersList from "./components/Users/UsersList/UsersList";
import AlbumsList from "./components/Albums/AlbumsList/AlbumsList";
import useData from "./hooks";

function App() {
  const { users, albums } = useData();

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/users">
            <UsersList users={users} />
          </Route>
          <Route path="/albums">
            <AlbumsList albums={albums} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
