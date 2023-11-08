import React, { useState } from 'react';

const ClassPicker = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedClasses([...selectedClasses, name]);
    } else {
      setSelectedClasses(selectedClasses.filter((selectedClass) => selectedClass !== name));
    }
  };

  return (
    <div>
      <h2>Pick Your Classes:</h2>
      <div>
        <h3>Monday/Wednesday/Friday:</h3>
        <label>
          <input
            type="checkbox"
            name="8:15-9:30"
            checked={selectedClasses.includes("8:15-9:30")}
            onChange={handleCheckboxChange}
          />
          8:15-9:30
        </label>
        <label>
          <input
            type="checkbox"
            name="9:40-10:55"
            checked={selectedClasses.includes("9:40-10:55")}
            onChange={handleCheckboxChange}
          />
          9:40-10:55
        </label>
        <label>
          <input
            type="checkbox"
            name="Common Time M/W/F"
            checked={selectedClasses.includes("Common Time M/W/F")}
            onChange={handleCheckboxChange}
          />
          Common Time
        </label>
        <label>
          <input
            type="checkbox"
            name="11:55-1:10"
            checked={selectedClasses.includes("11:55-1:10")}
            onChange={handleCheckboxChange}
          />
          11:55-1:10
        </label>
        <label>
          <input
            type="checkbox"
            name="1:20-2:35"
            checked={selectedClasses.includes("1:20-2:35")}
            onChange={handleCheckboxChange}
          />
          1:20-2:35
        </label>
        <label>
          <input
            type="checkbox"
            name="2:45-4:00"
            checked={selectedClasses.includes("2:45-4:00")}
            onChange={handleCheckboxChange}
          />
          2:45-4:00
        </label>
      </div>
      <div>
        <h3>Tuesday/Thursday:</h3>
        <label>
          <input
            type="checkbox"
            name="9:30-11:30"
            checked={selectedClasses.includes("9:30-11:30")}
            onChange={handleCheckboxChange}
          />
          9:30-11:30
        </label>
        <label>
          <input
            type="checkbox"
            name="Common Time T/TH"
            checked={selectedClasses.includes("Common Time T/TH")}
            onChange={handleCheckboxChange}
          />
          Common Time
        </label>
        <label>
          <input
            type="checkbox"
            name="12:10-2:00"
            checked={selectedClasses.includes("12:10-2:00")}
            onChange={handleCheckboxChange}
          />
          12:10-2:00
        </label>
        <label>
          <input
            type="checkbox"
            name="2:10-4:00"
            checked={selectedClasses.includes("2:10-4:00")}
            onChange={handleCheckboxChange}
          />
          2:10-4:00
        </label>
      </div>
      <div>
        <h3>Other:</h3>
        <label>
          <input
            type="checkbox"
            name="Gym Classes"
            checked={selectedClasses.includes("Gym Classes")}
            onChange={handleCheckboxChange}
          />
          Gym Classes
        </label>
        <label>
          <input
            type="checkbox"
            name="Other"
            checked={selectedClasses.includes("Other")}
            onChange={handleCheckboxChange}
          />
          Other
        </label>
      </div>
      <div>
        <h3>Selected Classes:</h3>
        <ul>
          {selectedClasses.map((selectedClass) => (
            <li key={selectedClass}>{selectedClass}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassPicker;

