// TermContext.js
import React, { createContext, useState } from "react";

export const TermContext = createContext();

export const TermProvider = ({ children }) => {
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([""]); // Initialized with one empty string
  const [selectedClassTimes, setSelectedClassTimes] = useState([]);

  return (
    <TermContext.Provider
      value={{
        selectedTerm,
        setSelectedTerm,
        selectedSubjects,
        setSelectedSubjects,
        selectedClassTimes,
        setSelectedClassTimes,
      }}
    >
      {children}
    </TermContext.Provider>
  );
};
