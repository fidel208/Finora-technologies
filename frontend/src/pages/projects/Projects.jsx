import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Connect from "../../components/connect/Connect";
import Footer from "../../components/footer/Footer";
import { useTheme } from "../../theme/Theme";

function Projects() {
  const { mode } = useTheme();
  return (
    <>
      <Header />
      <section id="projects" className={mode}>
        <div className="projects">
          <h1>PROJECTS</h1>
          <p>Our latest builds</p>
          <div className="projects-container">
            <div className="project-box" id="project1">
              <div className="box-details">
                <h2>Growssify</h2>
                <div className="project-type">
                  <span>Web application</span>
                  <span>Saas application</span>
                </div>
                <p>
                  A clean, web dashboard application made to help both
                  onboarding newbies and experienced business experts monitor
                  their operational cash flow. The application eliminates
                  complex bookkeeping, letting business owners focus on scaling
                  their operations.
                </p>
                <Link to={"https://growssify.vercel.app/"} target="_blank">
                  Live preview
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </Link>
              </div>
              <img src="/growssify.png" alt="project-1" />
            </div>
            <div className="project-box">
              <img src="/kasivodrumz.png" alt="project-2" />
              <div className="box-details">
                <h2>Kasivo drums</h2>
                <div className="project-type">
                  <span>Web application</span>
                  <span>Personal portfolio</span>
                </div>
                <p>
                  A sleek digital hub built for a professional live drummer to
                  seamlessly showcase his session gears, performance videos and
                  handle direct booking inquiries. Features highly optimized
                  video layout containers, responsive grids, and a frictionless
                  booking interface.
                </p>

                <Link to={"https://kasivodrums.vercel.app/"} target="_blank">
                  Live preview
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </Link>
              </div>
            </div>
            <div className="project-box" id="project1">
              <div className="box-details">
                <h2>Fidel Muthomi</h2>
                <div className="project-type">
                  <span>Personal portfolio</span>
                </div>
                <p>
                  A professional portfolio web application built to highlight
                  full-stack development and graphic design expertise. It
                  highlights end-to-end software engineering capabilities,
                  creative graphic design work, and production-ready SaaS
                  projects.
                </p>
                <Link to={"https://fidelmuthomi.vercel.app/"} target="_blank">
                  Live preview
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </Link>
              </div>
              <img src="/fidelmuthomi.png" alt="project-1" />
            </div>
          </div>
        </div>
      </section>
      <Connect />
      <Footer />
    </>
  );
}

export default Projects;
