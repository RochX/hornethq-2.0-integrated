import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import "./Layout.css";
import BreadCrumbNav from "./components/BreadCrumbNav/BreadCrumbNav";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import { Link } from "react-router-dom";

function Layout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div className={`layout ${isSideBarOpen ? "" : "closed"}`}>
      <div className={`sidebar ${isSideBarOpen ? "" : "closed"}`}>
        <SideBar isOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
      </div>

      <div className={`main ${isSideBarOpen ? "" : "closed"}`}>
        <div className="topbar">
          <TopBar toggleSideBar={toggleSideBar} />
        </div>
        <div className="breadcrumb">
          <BreadCrumbNav />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
