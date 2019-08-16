import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <NavLink exact to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="collapse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink exact to="/recipes" className="nav-link">
              Recipes
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
