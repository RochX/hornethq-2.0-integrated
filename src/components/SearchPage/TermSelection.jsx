import React, { useState } from 'react';
import './SearchPage.css';


function DropdownMenu() {
  // State to keep track of the selected term
  const [selectedTerm, setSelectedTerm] = useState('');

  // Define the terms as options
  const terms = ['Fall 2023','Winter 2024', 'Spring 2024' ];

  // Event handler for when a term is selected
  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  return (
    <div>
      <h2>Term:</h2>
      <select value={selectedTerm} onChange={handleTermChange}>
        <option value="">Select a Term</option>
        {terms.map((term, index) => (
          <option key={index} value={term}>
            {term}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownMenu;