import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../helperFunctions/windowDimensions";
// PageButton should mimic the current Hornet HQ 2.0 button on the home page
// It has a title and description on what it where it goes
// It also has an icon within a grey circle. Create fallback text in case image is not present

function MainNavButton (props) {
  const column_format_selected = getColumnFormat()

  const main_nav_classname = "main-nav-button " + column_format_selected

  return (
    <div className={main_nav_classname}  id={props.id}>
      <Link to={props.path}>
      <h3>
        <span className="main-nav-icon">{props.icon} </span>
        {props.title}
      </h3>
        <p>{props.description}</p>
      </Link>
    </div>
  );
}

function getColumnFormat() {
  const windowDimensions = useWindowDimensions();
  if (windowDimensions.width < 900) {
    return "one-col"
  }
  else {
    return "two-col"
  }
}

export default MainNavButton;