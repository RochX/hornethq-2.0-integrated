import React, { useState } from "react";
import "./SideBar.css";
import { FaBars, FaHome } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { Link } from "react-router-dom";
// Import the icon if you have it
// import { YourFinancialIcon } from 'react-icons/...';

const SideBar = () => {
  const arraySidebar = [
    {
      name: "Home",
      icon: <FaHome className="icon" />,
      link: "/",
    },
    {
      name: "Academics",
      icon: <RiGraduationCapFill className="icon" />,
      link: "/academics",
    },
    {
      name: "Employment",
      icon: <BiDollar className="icon" />,
      link: "/employee",
    },
    {
      name: "Settings",
      icon: <BsFillGearFill className="icon" />,
      link: "/settings",
    },
  ];

  return (
    <div className="sidebar">
      <div classname="hamburger">
        <FaBars />
      </div>
      <div className="map">
        {arraySidebar.map((item) => (
          <Link to={item.link} className="link-container">
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
