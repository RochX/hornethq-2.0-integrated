import React, { useEffect, useState } from "react";
import axios from "axios";
import Clock from "../Clock/Clock";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
} from "@mui/material";

const Calendar = () => {
  const [schedule, setSchedule] = useState([]);
  const [studentName, setStudentName] = useState(""); // State to store student's name

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentId = localStorage.getItem("student_id");
        if (!studentId) {
          console.error("No student ID found in localStorage.");
          return;
        }

        const studentResponse = await axios.get(
          "https://hhqv2backend.vercel.app/api/student"
        );
        const offeringsResponse = await axios.get(
          "https://hhqv2backend.vercel.app/api/offering"
        );

        const studentData = studentResponse.data.find(
          (student) => student.student_id === studentId
        );

        if (studentData) {
          setStudentName(studentData.name); // Set the student's name for the welcome message

          const enrolledCourses = studentData.enrollment
            .filter((enrollment) => enrollment.grade === "In Progress")
            .map((enrollment) => {
              const offeringDetails = offeringsResponse.data.find(
                (offering) => offering.offering_id === enrollment.offering_id
              );
              return offeringDetails
                ? {
                    time: `${offeringDetails.start_time} - ${offeringDetails.end_time}`,
                    event: offeringDetails.name,
                    status: "In Progress",
                    building: offeringDetails.building || "TBD",
                    room: offeringDetails.room || "TBD",
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
    <Container>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Clock />
        </Box>
        {studentName && (
          <Typography variant="h5" gutterBottom>
            Welcome, {studentName}!
          </Typography>
        )}
        <Typography variant="h4" gutterBottom>
          Schedule
        </Typography>
        <List>
          {schedule.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={item.event}
                  secondary={`${item.status} | ${item.time}`}
                />
                <Typography variant="body2" color="textSecondary">
                  {`${item.building} ${item.room}`}
                </Typography>
              </ListItem>
              {index < schedule.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
        {schedule.length === 0 && (
          <Typography variant="body1">
            No current in-progress courses.
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Calendar;
