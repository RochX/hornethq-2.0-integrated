import React, { useEffect, useState } from "react";
import { RiCurrencyLine, RiGraduationCapFill } from "react-icons/ri";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { MdEditCalendar } from "react-icons/md"
import { RiFilePaperLine } from "react-icons/ri";
import { BiSolidBookAlt } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaBusinessTime, FaFileInvoiceDollar } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbFileTime } from "react-icons/tb";
import { CgTranscript } from "react-icons/cg";

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
    <div className="main-nav-layout" id={props.id}>
      {mainNavButtons}
    </div>
  )
}

const PAGEBUTTON_CONTENT_DICT = {
  "ACADEMICS": {title: "Academics", description: "Go to academics page.", path: "/academics", icon: <RiGraduationCapFill />},
  "COURSE_CATALOG": {title: "Course Catalog", description: "Here you can view and search the course catalog.", path: "/academics/catalog", icon: <BiSolidBookAlt />},
  "GRADES": {title: "Grades", description: "Here you can view your grades by term.", path: "/academics/grades", icon: <RiFilePaperLine />},
  "STUDENT_PLANNING": {title: "Student Planning", description: "Here you can search for courses, plan your terms, and schedule & register your course sections.", path: "/academics/planning", icon: <MdEditCalendar />},
  "UNOFFICIAL_TRANSCRIPT": {title: "Unofficial Transcript", description: "Download an unofficial transcript.", path: "/academics/transcripts", icon: <CgTranscript />},
  "FININFO": {title: "Financial Information", description: "Here you can access billing, financial aid data, forms, etc.", path: "/financial", icon: <RiCurrencyLine />},
  "BILLING": {title: "Billing", description: "Here you can view your latest statement and make a payment online.", path: "/financial/billing", icon: <AiOutlineDollarCircle />},
  "EMPLOYEE": {title: "Employee", description: "Here you can view your tax form consents, earnings statements, banking information, timecards, and leave balances.", path: "/employee", icon: <BsFillPersonBadgeFill />},
  "TAX_INFO_EMPLOYEE": {title: "Tax Information", description: "Here you can change your consent for e-delivery of tax information.", path: "/employee/tax-information", icon: <LiaFileInvoiceDollarSolid />},
  "FINAID": {title: "Financial Aid", description: "Here you can access financial aid data, forms, etc.", path: "/financial/aid", icon: <FaFileInvoiceDollar />},
  "TAX_INFO_STUDENT": {title: "Tax Information", description: "Here you can change your consent for e-delivery of tax information.", path: "/financial/tax-information", icon: <LiaFileInvoiceDollarSolid />},
  "TIME_ENTRY": {title: "Time Entry", description: "Here you can fill out your timecards.", path: "/employee/time-sheet", icon: <FaBusinessTime />},
  "EARNING_STATEMENTS": {title: "Earnings Statements", description: "Here you can view your earnings statement history.", path: "/employee/earnings-statements", icon: <RiCurrencyLine />},
  "TIME_HISTORY": {title: "Time History", description: "Here you can view your paid timecards.", path: "/employee/time-history", icon: <TbFileTime />},
  "TIME_HISTORY_SUPERVISOR": {title: "Time History (Supervisor)", description: "Here you can view paid timecards for the people you supervise.", path: "/employee/supervisor-time-history", icon: <TbFileTime />},
}


const HOME_PAGE_BUTTONS_CONTENT = [
  PAGEBUTTON_CONTENT_DICT["ACADEMICS"],
  PAGEBUTTON_CONTENT_DICT["FININFO"],
  PAGEBUTTON_CONTENT_DICT["EMPLOYEE"],
  PAGEBUTTON_CONTENT_DICT["STUDENT_PLANNING"],
  PAGEBUTTON_CONTENT_DICT["GRADES"],
  PAGEBUTTON_CONTENT_DICT["COURSE_CATALOG"],
]

const ACADEMICS_PAGE_BUTTONS_CONTENT = [
  PAGEBUTTON_CONTENT_DICT["GRADES"],
  PAGEBUTTON_CONTENT_DICT["COURSE_CATALOG"],
  PAGEBUTTON_CONTENT_DICT["STUDENT_PLANNING"],  
  PAGEBUTTON_CONTENT_DICT["UNOFFICIAL_TRANSCRIPT"],
]

const FININFO_PAGE_BUTTONS_CONTENT = [
  PAGEBUTTON_CONTENT_DICT["BILLING"],
  PAGEBUTTON_CONTENT_DICT["FINAID"],
  PAGEBUTTON_CONTENT_DICT["TAX_INFO_STUDENT"],
]

const EMPLOYEE_PAGE_BUTTONS_CONTENT = [
  PAGEBUTTON_CONTENT_DICT["TAX_INFO_EMPLOYEE"],
  PAGEBUTTON_CONTENT_DICT["TIME_ENTRY"],
  PAGEBUTTON_CONTENT_DICT["EARNING_STATEMENTS"],
  PAGEBUTTON_CONTENT_DICT["TIME_HISTORY"],
  PAGEBUTTON_CONTENT_DICT["TIME_HISTORY_SUPERVISOR"],
]

pageButtonDataDictionary["home"] = HOME_PAGE_BUTTONS_CONTENT;
pageButtonDataDictionary["academics"] = ACADEMICS_PAGE_BUTTONS_CONTENT;
pageButtonDataDictionary["financial"] = FININFO_PAGE_BUTTONS_CONTENT;
pageButtonDataDictionary["employee"] = EMPLOYEE_PAGE_BUTTONS_CONTENT;

export default MainNavLayout;