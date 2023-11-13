import "./TopBar.css";
import React from "react";
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi'
import Cart from "./Cart";


function TopBar() {
  return (
    <>
      <div className="topnav">
        <a href="">
          <img
            src="https://hornethq.kzoo.edu/Student/K-Images/HornetHQ5.svg"
            alt="Hornet HQ"
            width="300"
            height="80"
          />
        </a>
        <a className="TopBar" href="">
          <FaUser style={{ color: 'orange' }} /> Profile
        </a>
        <a className="TopBar" href="">
          <BiLogOut style={{ color: 'orange' }} /> Sign Out
        </a>
        <Cart carItems={carItems}></Cart>
      </div>
    </>
  );
}

export default TopBar;
