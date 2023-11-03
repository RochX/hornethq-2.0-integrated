import React, { useEffect, useState } from "react";

import MainNavButton from "./MainNavButton";
import "./MainNavLayout.css";

var pageButtonDataDictionary = []
function MainNavLayout(props) {
  const [mainNavButtons, setMainNavButtons] = useState(); 

  // update the page buttons on page change
  useEffect(() => {
    const newPageButtons = pageButtonDataDictionary[props.id].map((button, index) =>
      <MainNavButton 
        id={`main-nav-button-${index}`}
        key={`main-nav-button-${index}`}
        index={index}
        title={button.title}
        // title={`button-${index}`}
        description={button.description}
        icon={button.icon}
        path={button.path}
      />
    );

    setMainNavButtons(newPageButtons)
  }, [props.id]);

  return (
    <>
      <h1>Welcome to the {props.id} page!</h1>
      <div className="main-nav-layout" id={props.id}>
        {mainNavButtons}
      </div>
    </>
  )
}

const HOME_PAGE_BUTTONS_CONTENT = [
  {title: "Academics", description: "Go to academics page.", path: "/academics"},
  // {title: "Billing", description: "Here you can view your latest statement and make a payment online."},
  {title: "Financial Information", description: "Here you can access billing, financial aid data, forms, etc.", path: "/financial"},
  // {title: "Tax Information", description: "Here you can change your consent for e-delivery of tax information."},
  {title: "Employee", description: "Here you can view your tax form consents, earnings statements, banking information, timecards, and leave balances.", path: "/employee"},
  {title: "Student Planning", description: "Here you can search for courses, plan your terms, and schedule & register your course sections."},
  {title: "Course Catalog", description: "Here you can view and search the course catalog."},
  {title: "Grades", description: "Here you can view your grades by term.", path: "/academics/grades"}
]

const ACADEMICS_PAGE_BUTTONS_CONTENT = [
  {title: "Grades", description: "View grades here.", icon: "", path: "/academics/grades"},
  {title: "Course Catalog", description: "View the course catalog", icon: "", path: "/academics/catalog"},
  {title: "Student Planning", description: "View and register for upcoming classes.", icon: "", path: "/academics/planning"},
  {title: "Unofficial Transcript", description: "Download an unofficial transcript."}
]

const FININFO_PAGE_BUTTONS_CONTENT = [
  {title: "Billing", description: "Here you can view your latest statement and make a payment online.", path: "/financial/billing"},
  {title: "Financial Aid", description: "Here you can access financial aid data, forms, etc.", path: "/financial/aid"},
  {title: "Tax Information", description: "Here you can change your consent for e-delivery of tax information."}
]

const EMPLOYEE_PAGE_BUTTONS_CONTENT = [
  {title: "Tax Information", description: "Here you can change your consent for e-delivery of tax information."},
  {title: "Time Entry", description: "Here you can fill out your timecards."},
  {title: "Earnings Statements", description: "Here you can view your earnings statement history."},
  {title: "Time History", description: "Here you can view your paid timecards."},
  {title: "Time History", description: "Here you can view paid timecards for the people you supervise."}
]

pageButtonDataDictionary["home"] = HOME_PAGE_BUTTONS_CONTENT;
pageButtonDataDictionary["academics"] = ACADEMICS_PAGE_BUTTONS_CONTENT;
pageButtonDataDictionary["financial"] = FININFO_PAGE_BUTTONS_CONTENT;
pageButtonDataDictionary["employee"] = EMPLOYEE_PAGE_BUTTONS_CONTENT;

export default MainNavLayout;