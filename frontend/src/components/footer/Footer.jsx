import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../theme/Theme";

function Footer() {
  const { mode } = useTheme();
  return (
    <>
      <footer className={mode}>
        <div className="footer">
          <div className="footer-top">
            <div className="top1">
              <div className="foot-top-words">
                <h1>Finora Technologies</h1>
                <p>
                  We transform simple ideas into smart, high-performing
                  software, built for reliability and real-time responsiveness.
                </p>
              </div>
              <span id="subscribe">
                <input
                  type="email"
                  name="subscribe"
                  id="subscribe"
                  placeholder="your@email.com"
                />
                <button>Subscribe</button>
              </span>
            </div>
            <div className="top2">
              <h1>Company</h1>
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/services"}>Services</Link>
              <Link to={"/projects"}>Projects</Link>
              <Link to={"/contact"}>Contact</Link>
            </div>
            <div className="top3">
              <h1>Services</h1>
              <Link to={"/services"}>Web development</Link>
              <Link to={"/services"}>App development</Link>
              <Link to={"/services"}>Cloud services</Link>
            </div>
            <div className="top4">
              <h1>Contact</h1>
              <Link to={"mailto:fidelmuthomi007@gmail.com"} target="_blank">
                Email us
              </Link>
              <Link to={"https://wa.link/m3ih9m"} target="_blank">
                Whatsapp
              </Link>
              <Link to={"tel:+254115931207"} target="_blank">
                Call us
              </Link>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="bottom-1">
              <p>
                &copy; <span>{new Date().getFullYear()}</span>. Finora
                Technologies. All rights reserved
              </p>
              <span className="footer-icons">
                <a href="https://wa.link/m3ih9m" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="mailto:fidelmuthomi007@gmail.com" target="_blank">
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </span>
            </div>
            <div className="bottom-2">
              <p>
                <i className="fa-solid fa-location-dot"></i> Kwale, Kenya
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
