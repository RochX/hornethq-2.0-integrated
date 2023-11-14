import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./SideBar.css";

const SideBar = ({ isOpen, toggleSideBar }) => {
  const theme = useTheme();
  const appBarColor = theme.palette.background.default; // This should be set to the color of the TopBar background

  const arraySidebar = [
    {
      name: "Home",
      icon: <FaHome />,
      link: "/home",
    },
    {
      name: "Academics",
      icon: <RiGraduationCapFill />,
      link: "/academics",
    },
    {
      name: "Employment",
      icon: <BiDollar />,
      link: "/employee",
    },
    {
      name: "Settings",
      icon: <BsFillGearFill />,
      link: "/settings",
    },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      onClose={toggleSideBar}
      sx={{
        width: isOpen ? 240 : 50,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isOpen ? 240 : 50,
          boxSizing: "border-box",
          backgroundColor: appBarColor,
        },
      }}
    >
      <IconButton onClick={toggleSideBar} sx={{ color: "white" }}>
        <MenuIcon />
      </IconButton>
      <List>
        {arraySidebar.map((item, index) => (
          <ListItem
            button
            key={item.name}
            component={Link}
            to={item.link}
            sx={{ color: "white" }}
          >
            <ListItemIcon
              sx={{ minWidth: isOpen ? 40 : "auto", justifyContent: "center" }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              sx={{ display: isOpen ? "block" : "none" }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
