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
    <Container>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Clock />
        </Box>
        <Typography variant="h4" gutterBottom>
          My Schedule
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
                  {`${item.Building} ${item.classNum}`}
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
