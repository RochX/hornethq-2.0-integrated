import { Outlet } from "react-router-dom";
import "./Layout.css";

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
          breadcrumb
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;