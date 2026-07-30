import React from "react";
import "./about.css";
import Header from "../../components/header/Header";
import Connect from "../../components/connect/Connect";
import Footer from "../../components/footer/Footer";
import { useTheme } from "../../theme/Theme";

function About() {
  const { mode } = useTheme();
  return (
    <>
      <Header />
      <section id="about" className={mode}>
        <div className="about">
          <div className="about-top">
            <h1>ABOUT US</h1>
            <div className="details-cont">
              <div className="details-start">
                <p id="about-sentence">With trusted experts by your side</p>
                <div className="about-details">
                  <span>
                    <p>
                      Finora Technologies is a software development organization
                      dedicated to building reliable, high-impact daily systems.
                    </p>
                    <p>
                      We improve the everyday experiences by building modern web
                      platforms, mobile apps, and scalable SaaS solutions using
                      cutting-edge frameworks like React.
                    </p>
                    <p>
                      Beyond building softwares, we provide graphic design
                      services, crafting bold brand logos and high-quality
                      marketing materials for growing businesses.
                    </p>
                  </span>
                </div>
              </div>
              <div className="founder-div">
                <span id="founder-image"></span>
                <span>
                  <p id="title">
                    <strong>Founder and CEO</strong>
                  </p>
                  <a
                    href="https://fidelmuthomi.vercel.app/"
                    target="_blank"
                    id="ceo-name"
                  >
                    Fidel Muthomi
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="values">
            <h1>CORE VALUES</h1>
            <p>Our guiding princinples that shape our daily behaviour</p>
            <div className="value-container">
              <span className="value-box">
                <i className="fa-solid fa-thumbs-up"></i>
                <h2>Simplicity</h2>
                <p>
                  Removing the unnecessary things so that the necessary may
                  speak.
                </p>
              </span>
              <span className="value-box">
                <i className="fa-solid fa-hand-fist"></i>
                <h2>Boldness</h2>
                <p>
                  The willingness to take risks, act confidently, and stand up
                  despite fear.
                </p>
              </span>
              <span className="value-box">
                <i className="fa-solid fa-users"></i>
                <h2>Collaboration</h2>
                <p>Encouraging teamwork, open dialogue, and shared goals.</p>
              </span>
            </div>
          </div>
          <div className="about-bottom">
            <h1>TOOLS</h1>
            <p>Our Technical Expertise</p>
            <div className="tools">
              <div className="web">
                <span>Html</span>
                <span>Css</span>
                <span>Javascript</span>
                <span>React</span>
                <span>Nodejs</span>
                <span>Postgres</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Connect />
      <Footer />
    </>
  );
}

export default About;
