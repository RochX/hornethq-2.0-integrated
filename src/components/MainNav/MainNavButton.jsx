import React from "react";
import { Link } from "react-router-dom";
// PageButton should mimic the current Hornet HQ 2.0 button on the home page
// It has a title and description on what it where it goes
// It also has an icon within a grey circle. Create fallback text in case image is not present

function MainNavButton (props) {
  return (
    <div className="main-nav-button" id={props.id}>
      <Link to={props.path}>
        <h3>{props.title}</h3>
        <span>{props.description}</span>
      </Link>
    </div>
  );
}

export default MainNavButton;