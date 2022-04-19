import { NavLink } from "react-router-dom";

import "./Nav.css";

function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/dashboard" activeClassName="is-active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName="is-active">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/albums" activeClassName="is-active">
            Albums
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
