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
            description: course.description,
            credit: offering.credit,
            activeStudents: offering.active_students,
            capacity: offering.capacity,
            sectionNumber: offering.section_number,
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
        mt: 4,
      }}
    >
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
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
      <TableContainer
        component={Paper}
        sx={{ maxWidth: "100%", overflowX: "auto" }}
      >
        <Table aria-label="course schedule" stickyHeader>
          <TableHead>
            <TableRow
              sx={{
                "& th": { fontWeight: "bold", backgroundColor: "#f5f5f5" },
              }}
            >
              <TableCell>Course Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Days</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell>Credit</TableCell>
              <TableCell>Capacity</TableCell>
              <TableCell>Enrolled</TableCell>
              <TableCell>Section</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCourses.map((course, index) => (
              <TableRow
                key={index}
                hover
                sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}
              >
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.description}</TableCell>
                <TableCell align="right">{course.days}</TableCell>
                <TableCell align="right">{course.time}</TableCell>
                <TableCell>{course.credit}</TableCell>
                <TableCell>{`${course.capacity} Students`}</TableCell>
                <TableCell>{`${course.activeStudents} Students`}</TableCell>
                <TableCell>{course.sectionNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClearSearch;
