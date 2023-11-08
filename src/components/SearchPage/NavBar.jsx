import React from 'react';
import './NavBar.css';
import './App.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="space-between">General Search</span>
       <div className="nav-item dropdown"> 
       Major
        <div className="dropdown-content">
          <a href="https://computerscience.kzoo.edu/requirements/courses/course-sequence-for-majors/">Computer Science</a> <br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/psychology/">Psychology</a>
        </div>
      </div>
      <div className="nav-item dropdown">
        Minor
        <div className="dropdown-content">
          <a href="https://computerscience.kzoo.edu/requirements/courses/course-sequence-for-minors/">Computer Science</a> <br />
          <a href="https://www.kzoo.edu/catalog/academic-programs/psychology/">Psychology</a>
        </div>
      </div>
      <div className="nav-item dropdown">
        Concentration
        <div className="dropdown-content">
          <a href="https://www.kzoo.edu/catalog/academic-programs/neuroscience/">Neuroscience</a>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for Courses" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
