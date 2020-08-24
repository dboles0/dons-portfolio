import React from "react"
import { Container, Row, Col } from "react-bootstrap"

class education extends React.Component {
  state = {}
  render() {
    const schools = [
      {

        school: "University of Boulder Colorado",
        info: <p>B.S. Computer Science</p>,
        attendencyYear: (
          <p>
            <i>2018-2019</i>
          </p>
        ),
        classesTaken: (
          <ul>
            <li>Discrete Structures</li>
            <li>Information Visualization</li>
            <li>Data Structures</li>
            <li>Computer Systems</li>
            <li>Introduction to Data Science Algorithms</li>
            <li>Software Development Methods and Tools</li>
            <li>Algorithms</li>
            <li>Principles of Programming Languages</li>
            <li>Cognative Science</li>
            <li>Design and Analysis of Operating Systems</li>
            <li>Data Mining</li>
            <li>Design and Analysis of Data Systems</li>
          </ul>
        ),
      },
    ]
    return (
      <Container id="courseWork" className="education">
          <div className="title">
              <div className="heading">
                  <h3>Relevent Class Work</h3>
                  </div>
              </div>
        {schools.map(s => (
          <Row key={`${s.school}_key`}>
            <Col sm={6} className="school info">
              <span>
                <h3>{s.school}</h3>
              </span>
              {s.info}
              {s.attendencyYear}
            </Col>
            <Col sm={6} className="clases">
              {s.classesTaken}
            </Col>
          </Row>
        ))}
      </Container>
    )
  }
}

export default education
