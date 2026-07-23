import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const [mode, setMode] = useState("light");
  const handleModes = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <>
      <div className="header">
        <nav>
          <div className="logo">
            <img src="src/assets/finora-rmv.png" alt="finora-logo" />
            <h1>
              <Link to={"/"}>Finora Technologies</Link>
            </h1>
          </div>
          <div className="links">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/services"}>Services</NavLink>
              </li>
              <li>
                <NavLink to={"/projects"}>Projects</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-btns">
            <button id="toggle-btn" onClick={handleModes}>
              <span className="material-symbols-outlined">
                {mode === "light" ? "dark_mode" : "light_mode"}
              </span>
            </button>
            <NavLink to={"/contact"}>
              <button id="contact-us-btn">Contact us</button>
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
