import React from "react";
import { Link } from "react-router-dom";
import "./connect.css";

function Connect() {
  return (
    <>
      <section id="connect">
        <div className="connect">
          <h1>Have an idea? Let's connect</h1>
          <p>Let’s turn your vision into a powerful, reliable application.</p>
          <Link to={"/contact"}>
            <button>Contact us</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Connect;
