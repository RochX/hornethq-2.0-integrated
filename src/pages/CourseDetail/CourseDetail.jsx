import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Paper,
  Typography,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CourseDetail = () => {
  const [courseDetails, setCourseDetails] = useState(null);
  const { courseId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hhqv2backend.vercel.app/api/course"
        );
        const course = response.data.find(
          (course) => course.course_id === courseId
        );
        setCourseDetails(course);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, [courseId]);

  if (!courseDetails) {
    return <CircularProgress />;
  }

  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
      <Typography variant="h4" gutterBottom>
        {courseDetails.title}
      </Typography>
      <Chip label={`Course ID: ${courseDetails.course_id}`} color="primary" />

      {/* Accordion for Description */}
      {courseDetails.description && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <h3>Description: </h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{courseDetails.description}</Typography>
          </AccordionDetails>
        </Accordion>
      )}

      {/* Accordion for Instructors */}
      {courseDetails.offering && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              {" "}
              <h3> Instructor(s): </h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {[
                ...new Set(
                  courseDetails.offering.map(
                    (offering) => offering.faculty_name
                  )
                ),
              ].map((facultyName) => (
                <div key={facultyName}>{facultyName}</div>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}
      {courseDetails.offering && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              {" "}
              <h3> Comments: </h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {[
                ...new Set(
                  courseDetails.offering.map(
                    (offering) =>
                      offering.comments || "No comments for this course"
                  )
                ),
              ].map((offeringComments) => (
                <div key={offeringComments}>{offeringComments}</div>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}
      {courseDetails.offering && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              {" "}
              <h3> Section Details </h3>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {courseDetails.offering.map((offering, index) => (
                <div
                  key={index}
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #ddd",
                    marginBottom: "10px",
                  }}
                >
                  <div>
                    <strong>Section:</strong> {offering.name}
                  </div>
                  <div>
                    <strong>Time:</strong> {offering.start_time} -{" "}
                    {offering.end_time}
                  </div>
                  <div>
                    <strong>Days:</strong> {offering.weekdays}
                  </div>
                  <div>
                    <strong>Credit:</strong> {offering.credit || "TBD"}
                  </div>
                  <div>
                    <strong>Building:</strong> {offering.building || "TBD"}
                  </div>
                  <div>
                    <strong>Room:</strong> {offering.room || "TBD"}
                  </div>
                  <div>
                    <strong>Faculty:</strong> {offering.faculty_name}
                  </div>
                  <div>
                    <strong>Capacity:</strong> {offering.capacity || "TBD"}
                  </div>
                  <div>
                    <strong>Active Students:</strong>{" "}
                    {offering.active_students || "TBD"}
                  </div>
                </div>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}

      {/* Add more accordions for additional information as needed */}
    </Paper>
  );
};

export default CourseDetail;
