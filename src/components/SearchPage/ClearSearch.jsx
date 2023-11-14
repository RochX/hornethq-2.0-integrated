import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { TermContext } from "./TermContext"; // Import TermContext

const ClearSearch = () => {
  const [courses, setCourses] = useState([]);
  const { selectedTerm, selectedSubjects, selectedClassTimes } =
    useContext(TermContext);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://hhqv2backend.vercel.app/api/course"
        );
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleClear = () => {
    setFilteredCourses([]);
    console.log("Clear button clicked");
  };

  const convertTimeFormat = (time) => {
    const [startTime, endTime] = time.split("-");
    const convertSingleTime = (singleTime) => {
      const [hours, minutes] = singleTime.split(":").map(Number);
      const isPM = hours >= 12;
      const formattedHours = isPM ? hours - 12 : hours;
      return `${formattedHours === 0 ? 12 : formattedHours}:${minutes
        .toString()
        .padStart(2, "0")}${isPM ? "PM" : "AM"}`;
    };
    return `${convertSingleTime(startTime)}-${convertSingleTime(endTime)}`;
  };

  const handleSearch = () => {
    console.log("Search button clicked");
    const convertedClassTimes = selectedClassTimes.map(convertTimeFormat);
    console.log("Converted Times:", convertedClassTimes);

    const results = courses
      .filter(
        (course) =>
          selectedSubjects.includes(course.subject_id) &&
          course.offering.some(
            (offering) =>
              offering.term_id === selectedTerm &&
              convertedClassTimes.some(
                (time) => `${offering.start_time}-${offering.end_time}` === time
              )
          )
      )
      .map((course) =>
        course.offering
          .filter(
            (offering) =>
              offering.term_id === selectedTerm &&
              convertedClassTimes.some(
                (time) => `${offering.start_time}-${offering.end_time}` === time
              )
          )
          .map((offering) => ({
            title: course.title,
            days: offering.weekdays,
            time: `${offering.start_time}-${offering.end_time}`,
          }))
      )
      .flat();

    setFilteredCourses(results);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<ClearIcon />}
          onClick={handleClear}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<SearchIcon />}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ maxWidth: 600, marginTop: 0 }}>
        <Table aria-label="course schedule">
          <TableHead>
            <TableRow>
              <TableCell>Course Title</TableCell>
              <TableCell align="right">Days</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCourses.map((course, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {course.title}
                </TableCell>
                <TableCell align="right">{course.days}</TableCell>
                <TableCell align="right">{course.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClearSearch;
