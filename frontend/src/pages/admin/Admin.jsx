import React from "react";
import "./admin.css";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <div className="login">
        <div className="login-box">
          <h1>Sign in to continue</h1>
          <p>
            Use your admin credentials to login into your admin account an
            manage your website contents.
          </p>
          <form>
            <span>
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" />
            </span>
            <span>
              <label htmlFor="password">Password</label>
              <input type="password" name="passowrd" id="password" />
            </span>
            <button type="button">Login</button>
          </form>
          <Link to={"/"}>
            {" "}
            <i class="fa-solid fa-arrow-left-long"></i> Back to the main page
          </Link>
        </div>
      </div>
    </>
  );
}

export default Admin;
