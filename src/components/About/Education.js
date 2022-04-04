import React from "react";
import { Col, Row } from "react-bootstrap";
import scrimba from "../../Assets/scrimba.png";
import cs50 from "../../Assets/cs50.jpg";
import buildspace from "../../Assets/buildspace.png";
import fcc from "../../Assets/fcc.jpg";
import udemy from "../../Assets/udemy.jpg";

function Education() {

  const [showBox, setState] = React.useState(false)
  function handleBoxToggle() {
    return setState(prevState => !prevState)
  }

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons"
        onClick={handleBoxToggle}
        onMouseEnter={handleBoxToggle}
        onMouseLeave={handleBoxToggle}
      ></Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://scrimba.com/">
          <img src={scrimba} alt="about" className="img-fluid" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://cs50.harvard.edu/college/2022/spring/">
          <img src={cs50} alt="about" className="img-fluid" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://buildspace.so/">
          <img src={buildspace} alt="about" className="img-fluid" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.freecodecamp.org/learn/">
          <img src={fcc} alt="about" className="img-fluid" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.udemy.com/course/blockchain-developer/">
          <img src={udemy} alt="about" className="img-fluid" />
        </a>
      </Col>

    </Row>
  );
}

export default Education;
