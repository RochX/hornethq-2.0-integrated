import React, { useState } from "react";
import "./SideBar.css";
import { FaBars, FaHome } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";
import { RiGraduationCapFill, RiCurrencyLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggleSideBar }) => {
  //   const [isOpen, setIsOpen] = useState(true);
  const arraySidebar = [
    {
      name: "Home",
      icon: <FaHome className="icon" />,
      link: "/home",
    },
    {
      name: "Academics",
      icon: <RiGraduationCapFill className="icon" />,
      link: "/academics",
    },
    {
      name: "Financial",
      icon: <RiCurrencyLine className="icon" />,
      link: "/financial",
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

  //   const toggleSideBar = () => {
  //     setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? "" : "closed"}`}>
      <div className="hamburger" onClick={toggleSideBar}>
        <FaBars />
      </div>
      <div className="map">
        {arraySidebar.map((item) => (
          <Link to={item.link} className="link-container" key={item.name}>
            {isOpen ? (
              item.icon
            ) : (
              <span className="icon-only">{item.icon}</span>
            )}
            {isOpen && item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
