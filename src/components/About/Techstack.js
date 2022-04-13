import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,

  DiGit,
} from "react-icons/di";
import {
  SiSolidity,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiCss3,
  SiNetlify,
  SiCanva,
  SiWoocommerce,
  SiTypescript
} from "react-icons/si";
import { FaHardHat } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";




function Techstack() {



  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons"     >
        <DiJavascript1 />
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
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <FaHardHat />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWoocommerce />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAdobelightroom />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
        {/* <img src={Canva} alt="Canva" className="img-fluid" /> */}
      </Col>
    </Row>
  );
}

export default Techstack;
