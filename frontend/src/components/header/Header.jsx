import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTheme } from "../../theme/Theme";

function Header() {
  const { mode, handleModes } = useTheme();

  const [openDropdown, setOpenDropdown] = useState(false);
  const handleDropdown = () => {
    if (openDropdown === false) {
      setOpenDropdown(true);
    } else {
      setOpenDropdown(false);
    }
  };

  return (
    <>
      <div className={`header ${mode}`}>
        <nav>
          <div className="logo">
            <img src="/finora-rmv.png" alt="finora-logo" />
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
            <button id="toggle-dropdown" onClick={handleDropdown}>
              <span className="material-symbols-outlined">
                {openDropdown === false ? "menu" : "close"}
              </span>
            </button>
            <NavLink to={"/contact"}>
              <button id="contact-us-btn">Contact us</button>
            </NavLink>
          </div>
        </nav>
        {openDropdown && (
          <div className="nav-dropdown">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/projects"}>Projects</Link>
            <button>
              <Link to={"/contact"}>Contact us</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
