// DropdownMenu.js
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import { TermContext } from "./TermContext"; // Import TermContext

export function DropdownMenu() {
  const [subjects, setSubjects] = useState([]);
  const { selectedTerm, selectedSubjects, setSelectedSubjects } =
    useContext(TermContext); // Use TermContext

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://hhqv2backend.vercel.app/api/course"
        );
        if (selectedTerm) {
          const filteredCourses = response.data.filter((course) =>
            course.offering.some(
              (offering) => offering.term_id === selectedTerm
            )
          );
          const subjectIds = new Set(
            filteredCourses.map((course) => course.subject_id)
          );
          const subjectsResponse = await axios.get(
            "https://hhqv2backend.vercel.app/api/subject"
          );
          const filteredSubjects = subjectsResponse.data.filter((subject) =>
            subjectIds.has(subject.subject_id)
          );
          setSubjects(filteredSubjects);
        }
      } catch (error) {
        console.error("Failed to fetch courses or subjects:", error);
      }
    };

    fetchCourses();
  }, [selectedTerm]); // Re-fetch when selectedTerm changes

  const handleSubjectChange = (event, index) => {
    const updatedSubjects = [...selectedSubjects];
    updatedSubjects[index] = event.target.value;
    setSelectedSubjects(updatedSubjects); // Update context
  };

  const addDropdown = () => {
    setSelectedSubjects([...selectedSubjects, ""]);
  };

  const removeDropdown = () => {
    setSelectedSubjects(selectedSubjects.slice(0, -1));
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <h2>Select Subjects:</h2>
      {selectedSubjects.map((selectedSubject, index) => (
        <FormControl key={index} fullWidth>
          <InputLabel>Subject</InputLabel>
          <Select
            value={selectedSubject}
            onChange={(event) => handleSubjectChange(event, index)}
            label="Subject"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {subjects.map((subject) => (
              <MenuItem key={subject.subject_id} value={subject.subject_id}>
                {subject.description}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
      <Button variant="contained" onClick={addDropdown} sx={{ mt: 2 }}>
        + Add More...
      </Button>
      {selectedSubjects.length > 1 && (
        <Button
          variant="contained"
          color="error"
          onClick={removeDropdown}
          sx={{ mt: 2 }}
        >
          - Remove Last
        </Button>
      )}
    </Box>
  );
}

export default DropdownMenu;
