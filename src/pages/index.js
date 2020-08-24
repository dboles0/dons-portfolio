import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap-theme.css";

import "../component/styles/index.css"
import Header from "../component/header"
import Scripts from "../component/scripts"
import ImageSlider from "../component/imageSlider"
import Nav from "../component/nav"
import About from "../component/about"
//import Skills from "../component/skills2"
import TreeMap from "../charts/BasicD3"
import ChartData from "../charts/chartdata.json"
import Education from "../component/education"
import Contact from "../component/contact"
import Copyright from "../component/copyright"
import Isotope from "../component/isotope"



export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ImageSlider />
        <Nav />
        <About />
        <TreeMap
          width={ChartData.w}
          height={ChartData.h}
          data={ChartData.data}
        />
        <Education />
        <Contact />
        <Isotope />
        <Copyright />
        <Scripts />
      </React.Fragment>
    )
  }
}
