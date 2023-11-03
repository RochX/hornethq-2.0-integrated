import { Outlet } from "react-router-dom";
import "./Layout.css";
import BreadCrumbNav from "./components/BreadCrumbNav/BreadCrumbNav";

function Layout() {
  return (
    <div className="layout">
      <div className="sidebar">
        sidebar
      </div>
      <div className="main">
        <div className="topbar">
          topbar
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