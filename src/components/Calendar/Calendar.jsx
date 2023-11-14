import React, { useEffect, useState } from "react";
import axios from "axios";
import Clock from "../Clock/Clock";
import "./Calendar.css";

const Calendar = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentId = localStorage.getItem("student_id");
        if (!studentId) {
          console.error("No student ID found in localStorage.");
          return;
        }

        const offeringsResponse = await axios.get(
          "https://hhqv2backend.vercel.app/api/offering"
        );
        const studentResponse = await axios.get(
          "https://hhqv2backend.vercel.app/api/student"
        );
        const studentData = studentResponse.data.find(
          (student) => student.student_id === studentId
        );

        if (studentData) {
          const enrolledCourses = studentData.enrollment
            .map((enrollment) => {
              const offeringDetails = offeringsResponse.data.find(
                (offering) => offering.offering_id === enrollment.offering_id
              );
              return offeringDetails
                ? {
                    time: `${offeringDetails.start_time} - ${offeringDetails.end_time}`,
                    event: offeringDetails.name,
                    Building: offeringDetails.building || "TBD",
                    classNum: offeringDetails.room || "TBD",
                  }
                : null;
            })
            .filter((course) => course !== null);

          setSchedule(enrolledCourses);
        } else {
          console.error("No enrollment data found for the student.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <Clock />
      </div>
      <div className="calendar-body">
        <div className="schedule-column">
          {schedule.map((item, index) => (
            <div className="schedule-item" key={index}>
              <div className="time-event">
                <div className="time">{item.time}</div>
                <div className="event">{item.event}</div>
              </div>
              <div className="location">
                <div className="building">{item.Building}</div>
                <div className="classNum">{item.classNum}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Additional components like add button and form if needed */}
      </div>
    </div>
  );
};

export default Calendar;
