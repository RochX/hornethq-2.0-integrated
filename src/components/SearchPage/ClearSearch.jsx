import React from 'react';
import './ClearSearch.css';

const ClearSearch = () => {
  const handleClear = () => {
    // Add logic to clear data or perform any other clear-related actions
    console.log('Clear button clicked');
  };

  const handleSearch = () => {
    // Add logic to perform search or any other search-related actions
    console.log('Search button clicked');
  };

  return (
    <div className="button-container">
      <button className="clear-button" onClick={handleClear}>Clear</button>
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default ClearSearch;