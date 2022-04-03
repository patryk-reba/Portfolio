import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiCss3

} from "react-icons/si";
import { FaHardHat } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";

import { BsWordpress } from "react-icons/bs";

function Techstack() {

  const [showBox, setState] = React.useState(false)
  function handleBoxToggle() {
    return setState(prevState => !prevState)
  }

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons"
        onClick={handleBoxToggle}
        onMouseEnter={handleBoxToggle}
        onMouseLeave={handleBoxToggle}
      >
        <DiJavascript1
          className={showBox ? "showSkillIcone" : " "} />
        <h3 className={showBox ? " " : "showSkillIcone"}>Javascript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHardHat />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobelightroom />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
    </Row>
  );
}

export default Techstack;
