import React, { useState } from 'react';

function SubjectDropdown() {
  const [subjects, setSubjects] = useState(['']); // Initialize with one dropdown

  // Function to handle adding a new dropdown
  const addDropdown = () => {
    setSubjects([...subjects, '']); // Add an empty subject
  };

  // Function to handle selecting a subject in a specific dropdown
  const handleSubjectChange = (event, index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index] = event.target.value;
    setSubjects(updatedSubjects);
  };


  // Define the subjects as options
  const courses = [
    'African Studies', 
    'American Studies', 
    'Anthropology and Sociology', 
    'Arabic', 
    'Art', 
    'Biology', 
    'Business', 
    'Chemistry', 
    'Chinese', 
    'Classics', 
    'Community and Global Health', 
    'Computer Science', 
    'Critical Ethnic Studies', 
    'East Asian Studies', 
    'Economics', 
    'English', 
    'Environmental Studies', 
    'French', 
    'German', 
    'Hebrew Language', 
    'History', 
    'Interdisciplinary', 
    'International Area Studies', 
    'Japanese', 
    'Language', 
    'Latin', 
    'Mathematics', 
    'Music', 
    'Philosophy', 
    'Physical Education', 
    'Physics', 
    'Political Science', 
    'Psychology', 
    'Religion', 
    'Shared Passage Seminar', 
    'Spanish', 
    'Theatre Arts', 
    'Women, Gender, and Sexuality', 
  ];

  return (
    <div>
      <h2>Select Subjects:</h2>
      {subjects.map((selectedSubject, index) => (
        <div key={index}>
          <select value={selectedSubject} onChange={(event) => handleSubjectChange(event, index)}>
            <option value="">Courses</option>
            {courses.map((course, optionIndex) => (
              <option key={optionIndex} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={addDropdown}>+ Add More...</button>
    </div>
  );
}

export default SubjectDropdown;