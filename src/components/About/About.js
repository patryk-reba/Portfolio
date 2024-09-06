import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import pwrLogo from "../../Assets/pwr-logo.jpg";
import Education from "./Education";
import earthImage from "../../Assets/earth.png"; // Import the Earth image

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <div className="flying-earth-container">
        <img src={earthImage} alt="Flying Earth" className="flying-earth" />
      </div>
      <iframe
        width="550vw"
        height="300vh"
        src="https://www.youtube.com/embed/Et1DElvCDE0?si=AYndRNTtMbJdIl8y"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={{ zIndex: "1000" }}
        allowFullScreen
      ></iframe>
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          Formal <strong className="purple">Education </strong>
        </h1>
        <div>
          <a
            href="http://pwr.edu.pl/en/"
            target="_blank"
            className="pwrContainer"
          >
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
              Know Who <strong className="purple">I am</strong>
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
