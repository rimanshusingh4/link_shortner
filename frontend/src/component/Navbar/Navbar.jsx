import React from "react";
import "./Navbar.css";
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="container1">
        <div className="items">
          <div className="logo">
            <img
              src= {Logo}
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
          <div className="button-div">
            <button className="button">Login</button>
            <button className="button">Register</button>

          </div>
          <i class="ri-menu-line"></i>


        </div>
      </nav>
    </>
  );
}

export default Navbar;
