import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">CareerPortal</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/post-job">Post Job</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
