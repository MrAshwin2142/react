import React from 'react'
import Card from './Card'
import { BrowserRouter,Router } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
<NavLink to="/cards" className="navbar-brand"> Products </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar