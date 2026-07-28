import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Connect from "../../components/connect/Connect";
import { useTheme } from "../../theme/Theme";

function Home() {
  const { mode } = useTheme();
  return (
    <>
      <Header />
      <div className={`home ${mode}`}>
        <section id="home">
          <div className="home-section">
            <div className="home-s1-top">
              <p>
                <strong>
                  We turn simple ideas into smart <span>software</span>
                </strong>
              </p>
              <div className="home-s1-btns">
                <Link to={"/projects"}>
                  <button>See our work</button>
                </Link>
                <Link to={"/contact"}>
                  <button>
                    Get in touch
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="home-s1-bottom">
              <h1>LATEST BUILDS</h1>
              <div className="bottom-links">
                <Link to={"https://growssify.vercel.app"} target="_blank">
                  Growssify
                </Link>
                <Link to={"https://kasivodrums.vercel.app"} target="_blank">
                  Kasivo drums
                </Link>
                <Link to={"/"} target="_blank">
                  Netizone
                </Link>
                <Link to={"https://fidelmuthomi.vercel.app"} target="_blank">
                  Fidel Muthomi
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="work">
          <div className="work">
            <h1>OUR WORK</h1>
            <span id="link-to-projects">
              <p>Featured projects</p>
              <Link to={"/projects"}>
                View all projects
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </Link>
            </span>
            <div className="works">
              <Link to>
                <div className="link-top" id="work-1"></div>
                <div className="link-bottom">
                  <h2>Growssify</h2>
                  <p>
                    This is a clean, web dashboard application made to help both
                    onboarding newbies and experienced business experts monitor
                    their operational cash flow. The application eliminates
                    complex bookkeeping, letting business owners focus on
                    scaling their operations.
                  </p>
                </div>
              </Link>
              <Link>
                <div className="link-top" id="work-2"></div>
                <div className="link-bottom">
                  <h2>Kasivo drums</h2>
                  <p>
                    A sleek digital hub built for a professional live drummer to
                    seamlessly showcase his session gears, performance videos
                    and handle direct booking inquiries. Features highly
                    optimized video layout containers, responsive grids, and a
                    frictionless booking interface.
                  </p>
                </div>
              </Link>
              <Link>
                <div className="link-top" id="work-3"></div>
                <div className="link-bottom">
                  <h2>Netizone</h2>
                  <p></p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section id="builds">
          <div className="builds">
            <h1>SERVICES</h1>
            <p>What we make</p>
            <div className="builds-container">
              <div className="build-cont">
                <span className="material-symbols-outlined" id="service-icon">
                  language
                </span>
                <h2>Web applications</h2>
                <p>
                  We design and develop custom web applications that streamline
                  business operations and improve user experiences.
                </p>
                <Link to={"/services"}>
                  Learn more
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
              <div className="build-cont">
                <span className="material-symbols-outlined" id="service-icon">
                  captive_portal
                </span>
                <h2>Portfolios</h2>
                <p>
                  We transform your professional achievements into sleek,
                  responsive web applications that capture client attention.
                </p>
                <Link to={"/services"}>
                  Learn more
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Connect />
      </div>
      <Footer />
    </>
  );
}

export default Home;
