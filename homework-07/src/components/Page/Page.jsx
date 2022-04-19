import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../Nav/Navigation";
import Dashboard from "../Dashboard/Dashboard";
import Users from "../Users/Users";
import Albums from "../Albums/Albums";

import "./Page.css"

function Page() {
  return (
    <div className="container">
      <Router>
        <Navigation />

        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/albums">
            <Albums />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Page;
