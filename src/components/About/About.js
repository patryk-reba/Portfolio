import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import pwrLogo from "../../Assets/pwr-logo.jpg";
import parkourImg from "../../Assets/parkour.png";
import Toolstack from "./Toolstack";
import Projects from "../Projects/Projects";
import Education from "./Education";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          Formal <strong className="purple">Education </strong>
        </h1>
        <div className="pwrContainer">
          <a href="http://pwr.edu.pl/en/">
            <img className="pwrImg" src={pwrLogo} />
          </a>

        </div>
        <h1 className="project-heading">
          Programming <strong className="purple">Education </strong>
        </h1>
        <Education />
        {/* <Projects /> */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* <img src={parkourImg} alt="about" className="img-fluid" style={{ borderRadius: "20%" }} /> */}
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>

        </Row>

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
