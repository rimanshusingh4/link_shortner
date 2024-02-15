import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="container1">
        <div className="items">
          <div className="logo">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              height={60}
              alt="logo"
            />
          </div>
          <div className="list">
            <ul className="lists">
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/"> Services</Link>
              </li>
              <li>
                <Link to="/about"> About</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="button">Login</button>
            <button className="button">Register</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
