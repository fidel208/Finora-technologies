import React from "react";
import "./aside.css";
import { NavLink, Link } from "react-router-dom";

function Aside() {
  return (
    <>
      <div className="aside">
        <div className="aside-top"></div>
        <div className="aside-nav">
          <ul>
            <li>
              <NavLink>
                <span class="material-symbols-outlined">dashboard</span>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink>
                <span class="material-symbols-outlined">handyman</span>Services
              </NavLink>
            </li>
            <li>
              <NavLink>
                <span class="material-symbols-outlined">task</span>Projects
              </NavLink>
            </li>
            <li>
              <NavLink>
                <span class="material-symbols-outlined">groups</span>Community
              </NavLink>
            </li>
            <li>
              <NavLink>
                <span class="material-symbols-outlined">airplay</span>Broadcast
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin"}>
                <span class="material-symbols-outlined">logout</span>Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Aside;
