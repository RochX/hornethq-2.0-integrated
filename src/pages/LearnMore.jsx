import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LearnMore = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        console.log('Fetching data for courseId:', courseId);
        const response = await axios.get(`https://hhqv2backend.vercel.app/api/course`);
        console.log('Response data:', response.data);
        
        const selectedCourse = response.data.find(course => course.course_id === courseId);

        if (selectedCourse) {
          setCourseData(selectedCourse);
          setLoading(false);
        } else {
          // Handle case where the course with courseId is not found
          setError(new Error(`Course with ID ${courseId} not found`));
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Adjust the property names based on the actual structure of your API response
  return (
    <div>
      <h2>Course Information</h2>
      <p>Course Name: {courseData.title}</p>
      <p>Course Code: {courseData.course_id}</p>
      <p>Credit Type: {courseData.credit_type}</p>
      <p>Description: {courseData.description}</p>

      <h3>Offerings:</h3>
      <ul>
        {Array.isArray(courseData.offering) && courseData.offering.length > 0 ? (
          courseData.offering.map((offering, index) => (
            <li key={index}>
              <p>Offering ID: {offering.offering_id}</p>
              <p>Section Number: {offering.section_number}</p>
              <p>Faculty Name: {offering.faculty_name}</p>
              <p>Start Time: {offering.start_time}</p>
              <p>End Time: {offering.end_time}</p>
            </li>
          ))
        ) : (
          <li>No offerings available</li>
        )}
      </ul>
    </div>
  );
};

export default LearnMore;
