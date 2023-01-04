import React from "react";
import { NavLink,Link } from "react-router-dom";
import Parent from "../lifing state up/Parent";

function Navbar2() {
  return (
    <div>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <NavLink className="nav-link" to="/users">
            users
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cards">
            products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/parent">
            Lifting State Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar2;
