// DropdownMenu.js
import React, { useContext, useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import axios from "axios";
import { TermContext } from "./TermContext"; // Import TermContext

function TermSelection() {
  const [terms, setTerms] = useState([]);
  const { selectedTerm, setSelectedTerm } = useContext(TermContext); // Use TermContext

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await axios.get(
          "https://hhqv2backend.vercel.app/api/term"
        );
        const fetchedTerms = response.data.map((term) => term.term_id);
        setTerms(fetchedTerms);
      } catch (error) {
        console.error("Error fetching terms:", error);
      }
    };

    fetchTerms();
  }, []);

  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="term-select-label">Term</InputLabel>
        <Select
          labelId="term-select-label"
          id="term-select"
          value={selectedTerm}
          label="Term"
          onChange={handleTermChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {terms.map((term, index) => (
            <MenuItem key={index} value={term}>
              {term}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default TermSelection;
