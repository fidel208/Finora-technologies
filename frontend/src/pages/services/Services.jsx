import React from "react";
import "./services.css";
import Header from "../../components/header/Header";
import Connect from "../../components/connect/Connect";
import Footer from "../../components/footer/Footer";
import { useTheme } from "../../theme/Theme";

function Services() {
  const { mode } = useTheme();
  return (
    <>
      <Header />
      <section id="services" className={mode}>
        <div className="services">
          <div className="service-words">
            <h1>OUR SERVICES</h1>
            <p id="make">End-to-End Software Solutions Across Every Category</p>
            <p>
              Whether simple or highly complex, we have the technical capability
              to transform your concepts into reality.
            </p>
          </div>
          <div className="service-container">
            <div className="service-box">
              <img src="/web-development.jpg" alt="service-1" />
              <span>
                <h3>Web development</h3>
                <p>
                  Powered by modern frameworks like React, we build web
                  applications scaled to your exact needs, from straightforward
                  tools to complex platforms.
                </p>
                <ul>
                  <li>Saas applications</li>
                  <li>Api development</li>
                </ul>
              </span>
            </div>
            <div className="service-box" id="service-box2">
              <span>
                <h3>App development</h3>
                <p>
                  Developing for iOS and Android, we build seamless,
                  high-performance mobile applications tailored to your business
                  needs.
                </p>
                <ul>
                  <li>Saas applications</li>
                  <li>Api development</li>
                </ul>
              </span>
              <img src="/app-development.jpg" alt="service-2" />
            </div>
            <div className="service-box">
              <img src="/cloud.jpg" alt="service-2" />
              <span>
                <h3>Cloud Services</h3>
                <p>
                  Designing secure, scalable cloud environments to host your
                  applications with zero downtime and automatic backups.
                </p>
                <ul>
                  <li>Saas applications</li>
                  <li>Platform as a service</li>
                  <li>Infrastructure as a service</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Connect />
      <Footer />
    </>
  );
}

export default Services;
