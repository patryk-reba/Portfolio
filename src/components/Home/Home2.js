import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Me-black-white3.png";
import homeLogo from "../../Assets/home-main.svg";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImMail } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container id="home2">
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Self-taught programmer, passionate about building things with
              React JS🏗️
              <br />
              {/* <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, CSS and HTML. </b>
              </i>
              <br /> */}
              <br />
              My field of interest is building new &nbsp;
              <b className="purple">Web Apps and Products, </b> especially
              related to
              <b className="purple"> AI.</b>
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like */}
              {/* <b className="purple"> React.js and Next.js. </b> */}
              Check out my{" "}
              <Link to="/project" style={{ textDecoration: "none" }}>
                <b className="purple">Portfolio</b>
              </Link>{" "}
              to see projects I've worked on and{" "}
              <Link to="/about" style={{ textDecoration: "none" }}>
                <b className="purple">About</b>
              </Link>{" "}
              section to find out more about me and my skills.
              {/* <b className="purple"> 
        
                </b> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "350px" }}
              />
              {/* <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: "100%" }} /> */}
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/patryk-reba"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href=" "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/patryk-reba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  // href="patykreba@gmail.com "
                  value="patykreba@gmail.com "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <ImMail />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
