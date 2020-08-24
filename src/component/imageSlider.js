import React, { useState } from "react"

import Carousel from "react-bootstrap/Carousel"
import ReactTyped from "react-typed"
import "react-typed/dist/animatedCursor.css"
import slide1 from "../img/slide1.jpeg"
import slide2 from "../img/slide2.jpeg"
import slide3 from "../img/slide3.jpeg"
import resume from "../img/portfolio/DonaldBolesResume.pdf"

const text = (
  <React.Fragment>
    <div className="titleMessage">
      <div className="heading">
        <p className="name">Donald Boles</p>
        <div className="title">
          <ReactTyped
            loop
            typeSpeed={81}
            backSpeed={20}
            strings={[
              "Application Developer",
              "Software Developer",
              "Engeneer",
            ]}
            smartBackspace
            shuffle={false}
            backDelay={1}
            fadeOut={false}
            fadeOutDelay={100}
            loopCount={0}
            showCursor
            cursorChar="|"
          />
        </div>
      </div>
      <a href={resume} target="_blank" className="resume" download>
        <i className="fa fa-download"></i> Download Resume
      </a>
      <div className="more">
        
        <a className="link" href="#about">
          See More
          <i class="fas fa-level-down-alt"></i>
        </a>
      </div>
    </div>
    <div className="carouselOverlay" />
  </React.Fragment>
)

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <React.Fragment>
      <div id="home" />
      <Carousel
        activeIndex={index % 3}
        onSelect={handleSelect}
        indicators={false}
        nextIcon={
          <span aria-hidden="true" className="carousel-control-next-icon" />
        }
        prevIcon={
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        }
      >
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="" />
        </Carousel.Item>
        {text}
      </Carousel>
    </React.Fragment>
  )
}
