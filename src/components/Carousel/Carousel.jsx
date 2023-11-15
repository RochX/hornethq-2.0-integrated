import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import KColor from "../../KColor.png";
import { Slide } from "@mui/material";
import "./Carousel.css";

const Carousel = ({ onDataPassed }) => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  const desiredCourseIds = [
    "HIST-230",
    "ENGL-153",
    "MUSC-105",
    "ENVS-115",
    "RELG-232",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hhqv2backend.vercel.app/api/course"
        );
        const filteredData = response.data.filter((course) =>
          desiredCourseIds.includes(course.course_id)
        );
        setCarouselData(filteredData);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };
    fetchData();
  }, []);

  const changeSlide = (newSlide) => {
    setSlideIn(false);
    setTimeout(() => {
      setCurrentSlide(newSlide);
      setSlideIn(true);
    }, 500); // Duration should match the Slide transition duration
  };

  const handleNext = () => {
    changeSlide(currentSlide < carouselData.length - 1 ? currentSlide + 1 : 0);
  };

  const handlePrev = () => {
    changeSlide(currentSlide > 0 ? currentSlide - 1 : carouselData.length - 1);
  };

  const handleAdd = () => {
    const data = carouselData[currentSlide].course_id;
    onDataPassed(data);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide, carouselData.length]);

  if (!carouselData.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="carousel">
      <Slide direction="left" in={slideIn} mountOnEnter unmountOnExit>
        <div className="slide">
          <div className="image-holder">
            <img src={KColor} className="carousel-image" alt="Carousel" />
          </div>
          <div className="info-container">
            <h1 className="carousel-top">
              {carouselData[currentSlide].course_id +
                ": " +
                carouselData[currentSlide].title}
            </h1>
            <ul className="carousel-top">
              {[
                ...new Set(
                  carouselData[currentSlide].offering.map(
                    (offering) => offering.faculty_name
                  )
                ),
              ].map((facultyName, index) => (
                <li key={index}>
                  {facultyName}
                  <br /> {carouselData[currentSlide].offering[index].term_id}
                </li>
              ))}
            </ul>
            <a
              href={`/course-detail/${carouselData[currentSlide].course_id}`}
              className="carousel-top"
            >
              Learn more
            </a>
          </div>
        </div>
      </Slide>
      <button className="left-click slide-controller" onClick={handlePrev}>
        <BsChevronLeft className="left-icon" />
      </button>
      <button className="right-click slide-controller" onClick={handleNext}>
        <BsChevronRight />
      </button>
      <button className="add" onClick={handleAdd}>
        Quick add
      </button>
    </div>
  );
};

export default Carousel;
