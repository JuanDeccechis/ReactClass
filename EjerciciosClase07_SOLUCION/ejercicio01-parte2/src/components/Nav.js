import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/GithubProfiles">
          GithubProfiles
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/Logout">Logout</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
