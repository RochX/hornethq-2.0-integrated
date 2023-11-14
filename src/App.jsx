import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Layout from "./Layout";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Grades from "./pages/Academics/Grades";
import CourseCatalog from "./pages/Academics/CourseCatalog";
import StudentPlanning from "./pages/Academics/StudentPlanning";
import UnofficialTranscript from "./pages/Academics/UnofficialTranscript";
import Employee from "./pages/Employee";
import EmployeeTaxInfo from "./pages/Employee/EmployeeTaxInfo";
import EarningsStatements from "./pages/Employee/EarningsStatements";
import SupervisorTimeHistory from "./pages/Employee/SupervisorTimeHistory";
import TimeEntry from "./pages/Employee/TimeEntry";
import TimeHistory from "./pages/Employee/TimeHistory";
import FinInfo from "./pages/FinInfo";
import Billing from "./pages/FinInfo/Billing";
import FinAid from "./pages/FinInfo/FinAid";
import StudentTaxInfo from "./pages/FinInfo/StudentTaxInfo";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage/LoginPage";
import CourseDetail from "./pages/CourseDetail/CourseDetail";

function App() {
  const [dataFromChild, setDataFromChild] = useState(null);
  const handleChildData = (childData) => {
    setDataFromChild(childData);
  };
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Layout courseID={dataFromChild} />}>
        <Route index element={<Navigate to="login" />} />

        <Route path="/course-detail/:courseId" element={<CourseDetail />} />

        <Route path="home" element={<Home onDataPassed={handleChildData} />} />
        <Route path="academics" element={<Academics />} />
        <Route path="academics/grades" element={<Grades />} />
        <Route path="/academics/catalog" element={<CourseCatalog />} />
        <Route path="/academics/planning" element={<StudentPlanning />} />
        <Route
          path="/academics/transcripts"
          element={<UnofficialTranscript />}
        />
        <Route path="employee" element={<Employee />} />
        <Route
          path="/employee/earnings-statements"
          element={<EarningsStatements />}
        />
        <Route
          path="/employee/supervisor-time-history"
          element={<SupervisorTimeHistory />}
        />
        <Route path="employee/tax-information" element={<EmployeeTaxInfo />} />
        <Route path="/employee/time-history" element={<TimeHistory />} />
        <Route path="employee/time-sheet" element={<TimeEntry />} />
        <Route path="financial" element={<FinInfo />} />
        <Route path="/financial/billing" element={<Billing />} />
        <Route path="/financial/aid" element={<FinAid />} />
        <Route path="/financial/tax-information" element={<StudentTaxInfo />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}

export default App;
