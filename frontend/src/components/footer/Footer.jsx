import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="top1">
            <h1>Finora Technologies</h1>
            <p>We turn simple ideas into smart software</p>
            <span id="subscribe">
              <input type="text" name="subscribe" id="subscribe" />
              <button>Subscribe</button>
            </span>
          </div>
          <div className="top2">
            <h1>Company</h1>
            <Link to={"/about"}>About</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
          <div className="top3">
            <h1>Services</h1>
            <Link>Web applications</Link>
            <Link>Mobile applications</Link>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p>
            &copy; <span id="year"></span>. Finora Technologies. All rights
            reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
