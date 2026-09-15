import React from "react";
import "./dashboard.css";
import { Outlet } from "react-router-dom";
import Aside from "../../components/aside/Aside";
import AdminHeader from "../../components/admin-header/AdminHeader";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <aside>
          <Aside />
        </aside>
        <main>
          <header>
            <AdminHeader />
          </header>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Dashboard;
