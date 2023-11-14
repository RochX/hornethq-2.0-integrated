import "./TopBar.css";
import React from "react";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <>
      <div className="topnav">
        <Link to="">
          <img
            src="https://hornethq.kzoo.edu/Student/K-Images/HornetHQ5.svg"
            alt="Hornet HQ"
            width="300"
            height="80"
          />
        </Link>
        <Link className="TopBar" to="">
          <FaUser style={{ color: "orange" }} /> Profile
        </Link>
        <Link className="TopBar" to="/login">
          <BiLogOut style={{ color: "orange" }} /> Sign Out
        </Link>
      </div>
    </>
  );
}

export default TopBar;
