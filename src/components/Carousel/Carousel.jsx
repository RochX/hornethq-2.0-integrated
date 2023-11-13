import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./Carousel.css";

const Carousel = ({ addToCart }) => {
  const carrouselData = [
    {
      title: "Intro to Sleeping",
      info: "/",
      prof: "Dr Jackson",
      offerings: ["Winter", "Fall"],
      picUrl:
        "https://images.pexels.com/photos/18379232/pexels-photo-18379232/free-photo-of-wheat-on-a-field-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      title: "Underwater Basket Weaving 101",
      info: "/",
      prof: "Dr Jackson",
      offerings: ["Winter", "Spring"],
      picUrl:
        "https://images.pexels.com/photos/17728880/pexels-photo-17728880/free-photo-of-landscape-water-field-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Alien Communication for Earthlings",
      info: "/",
      prof: "Dr Jackson",
      offerings: ["Winter", "Spring"],
      picUrl:
        "https://images.pexels.com/photos/18260982/pexels-photo-18260982/free-photo-of-boys-riding-bicycles-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "How to Become a Professional Bed Tester",
      info: "/",
      prof: "Dr Jackson",
      offerings: ["Winter", "Spring", "Fall"],
      picUrl:
        "https://images.pexels.com/photos/3135371/pexels-photo-3135371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "The Science of Spaghetti Splatter Dynamics",
      info: "/",
      prof: "Dr Jackson",
      offerings: ["Winter", "Spring"],
      picUrl:
        "https://images.pexels.com/photos/18072294/pexels-photo-18072294/free-photo-of-woman-standing-by-atm-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const [currentlide, setCurrentSlide] = useState(0);
  const currentSlide = 0;
  const handleNext = () => {
    if (currentSlide < carrouselData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(carrouselData.length - 1);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  function slideButtons(index) {
    let classes = " slider-button ";
    if (currentSlide === index) classes += " selected ";
    return classes;
  }

  return (
    <div className="carousel">
      <div className="slide">
        <div className="image-holder">
          <img
            src={carrouselData[currentSlide].picUrl}
            alt=""
            className="carrousel-image"
          />
        </div>
        <div className="info-container">
          <h1 className="carousel-top">{carrouselData[currentSlide].title}</h1>
          <h3 className="carousel-top">{carrouselData[currentSlide].prof}</h3>
          <ul className="carousel-top">
            {carrouselData[currentSlide].offerings.map((offering) => (
              <li key={offering}>{offering}</li>
            ))}
          </ul>
          <a href={carrouselData[currentSlide].info} className="carousel-top">
            Learn more
          </a>
        </div>
      </div>
      <button className="left-click slide-controller" onClick={handlePrev}>
        <BsChevronLeft className="left-icon" />
      </button>
      <button className="right-click slide-controller" onClick={handleNext}>
        <BsChevronRight />
      </button>
      <div className="slider-buttons">
        {carrouselData.map((box, index) => (
          <button
            key={index}
            className={slideButtons(index)}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      {carrouselData.map(item => (
        <button key={item.index} className="add" onClick={() => addToCart(item.name)}>Quick add</button>
      ))}
    </div>
  );
};
export default Carousel;
