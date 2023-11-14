// ClassPicker.jsx
import React, { useContext } from "react";
import {
  FormControlLabel,
  Checkbox,
  FormGroup,
  Typography,
  Box,
} from "@mui/material";
import { TermContext } from "./TermContext";

const ClassPicker = () => {
  const { selectedClassTimes, setSelectedClassTimes } = useContext(TermContext);
  const generalClassTimes = [
    "8:15-9:30",
    "9:40-10:55",
    "11:55-1:10",
    "1:20-2:35",
    "2:45-4:00",
    // ... other times
  ];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedClassTimes = checked
      ? [...selectedClassTimes, name]
      : selectedClassTimes.filter((time) => time !== name);

    setSelectedClassTimes(updatedClassTimes);
  };

  return (
    <Box sx={{ margin: "16px" }}>
      <Typography variant="h6" gutterBottom>
        Select Class Times:
      </Typography>
      <FormGroup>
        {generalClassTimes.map((time) => (
          <FormControlLabel
            key={time}
            control={
              <Checkbox
                checked={selectedClassTimes.includes(time)}
                onChange={handleCheckboxChange}
                name={time}
              />
            }
            label={time}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default ClassPicker;
