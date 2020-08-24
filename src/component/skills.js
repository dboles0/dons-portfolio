import React from "react"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import $ from "jquery"

class Skills extends React.Component() {
  componentDidMount() {
    const script = document.createElement("script")
    const link = document.createElement("link")

    script.src = "https://code.jquery.com/jquery-3.2.1.slim.min.js"
    script.async = true

    document.body.appendChild(script)

    link.href = "owl-carousel/owl.theme.css"
    link.async = true

    document.body.appendChild(link)
  }

  render() {
    const options = {
      items: 1,
      nav: true,
      rewind: true,
      autoplay: true,
    }

    return (
      <div id="skills" className="skillsSection">
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-theme" loop margin={10} nav>
              <div class="item">
                <h4>1</h4>
              </div>
              <div class="item">
                <h4>2</h4>
              </div>
              <div class="item">
                <h4>3</h4>
              </div>
              <div class="item">
                <h4>4</h4>
              </div>
              <div class="item">
                <h4>5</h4>
              </div>
              <div class="item">
                <h4>6</h4>
              </div>
              <div class="item">
                <h4>7</h4>
              </div>
              <div class="item">
                <h4>8</h4>
              </div>
              <div class="item">
                <h4>9</h4>
              </div>
              <div class="item">
                <h4>10</h4>
              </div>
              <div class="item">
                <h4>11</h4>
              </div>
              <div class="item">
                <h4>12</h4>
              </div>
            </OwlCarousel>

            {/* <div className="owl-carousel owl-theme">
          <div className="skill">
            <span className="chart" data-percent="50">
              <span className="percent">50</span>
              <canvas height="152" width="152"></canvas>
            </span>
            <h4>Python</h4>
            <p>Used for most Data Science Projects</p>
          </div>

          <div className="skill">
            <span className="chart" data-percent="41">
              <span className="percent">41</span>
              <canvas height="152" width="152"></canvas>
            </span>
            <h4>C++</h4>
            <p>Used mostly in data structures related projects</p>
          </div>

          <div className="skill">
            <span className="chart" data-percent="40">
              <span className="percent">40</span>
              <canvas height="152" width="152"></canvas>
            </span>
            <h4>C</h4>
            <p>
              Used in lower level coursework and parallel threading for
              academic projects
            </p>
          </div>

          <div className="skill">
            <span className="chart" data-percent="40">
              <span className="percent">40</span>
              <canvas height="152" width="152"></canvas>
            </span>
            <h4>HTML</h4>
            <p>Exposed to fundamental concepts for small projects</p>
          </div>

          <div className="skill">
            <span className="chart" data-percent="40">
              <span className="percent">40</span>
              <canvas height="152" width="152"></canvas>
            </span>
            <h4>CSS</h4>
            <p>
              Basic understanding of fundamental work outside of academic
              projects
            </p>
          </div>

          <div className="skill">
            <span className="chart" data-percent="35">
              <span className="percent">35</span>
              <canvas height="152" width="152"></canvas>
            </span>
            <h4>JavaScript</h4>
            <p>Some exposure to simple client side projects</p>
          </div>

          <div className="skill">
            <span className="chart" data-percent="26">
              <span className="percent">26</span>
              <canvas height="152" width="152"></canvas>
            </span>
            <h4>Scala</h4>
            <p>
              Used for one academic project to build a recursive decent parser
              that behaved similar to JavaScript
            </p>
          </div>
        </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
