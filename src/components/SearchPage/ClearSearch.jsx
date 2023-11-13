import React, { useState } from 'react';
import './ClearSearch.css';

const ClearSearch = () => {
    const [searchResults, setSearchResults] = useState("");
  const handleClear = () => {
    // Add logic to clear data or perform any other clear-related actions
    setSearchResults("")
    console.log('Clear button clicked');
  };

  const handleSearch = () => {
    // Add logic to perform search or any other search-related actions
    setSearchResults("Results");
    console.log('Search button clicked');
  };

  return (
    <div className="button-container">
      <button className="clear-button" onClick={handleClear}>Clear</button>
      <button className="search-button" onClick={handleSearch}>Search</button>
      <p>{searchResults}</p>
    </div>
  );
};

export default ClearSearch;