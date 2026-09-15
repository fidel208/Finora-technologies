import React from "react";
import "./adminHeader.css";

function AdminHeader() {
  return (
    <>
      <div className="admin-header">
        <div className="admin-left">
          <p id="hello">Hello Fidel</p>
          <p id="welcome">Welcome back!</p>
        </div>
        <div className="admin-right">
          <span id="dp"></span>
        </div>
      </div>
    </>
  );
}

export default AdminHeader;
