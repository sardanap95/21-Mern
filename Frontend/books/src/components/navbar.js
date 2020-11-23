import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark shadow">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              Google Book Search
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              Saved &nbsp;
              <i className="far fa-bookmark"></i>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
