import React from "react"
import myPicture from "../img/profile_pic.png"

export default function About({ element }) {
  return (
    <div id="about" className="section">
      <div className="container" ref={element}>
        <div className="row">
          <div className="col-md-5">
            <img className="aboutImage" src={myPicture} alt="" />
          </div>

          <div className="col-md-7">
            <h4>Hello! My Name is Donald Boles</h4>
            <p>
              I'm a local resident of Hillsboro, Oregon and recently graduated
              from the University of Colorado at Boulder with a Bachelor's
              degree in Computer Science (December 2019). During my education, I
              have worked on multiple academic projects, both individually and
              in group settings. I love to collaborate and get excited about
              discussing all things computer science!
            </p>
            <p>
              Outside of my academic experience, I am a husband and new father
              of two and enjoy coffee, computers, and a good puzzle.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
