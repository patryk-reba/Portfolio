import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me-new.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import AsteroidField from "./Asteroid";
import earthImage from "../../Assets/earth.png"; // Make sure to add this image to your Assets folder

function Home() {
  const [destroyedAsteroids, setDestroyedAsteroids] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleAsteroidClick = useCallback(() => {
    setDestroyedAsteroids((prev) => prev + 1);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PATRYK</strong>
                <strong className="main-name secondName"> REBA</strong>
              </h1>
              <div style={{ padding: 50, paddingTop: 10, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 0 }}>
              <div className="image-container">
                <Tilt>
                  <img
                    src={myImg}
                    className="img-fluid"
                    alt="avatar"
                    style={{ borderRadius: "30%", maxHeight: "450px" }}
                  />
                </Tilt>
                {showMessage && (
                  <div className="message-cloud">
                    Congratulations!
                    <br />
                    You've destroyed <strong>{destroyedAsteroids}</strong>{" "}
                    asteroid
                    {destroyedAsteroids !== 1 ? "s" : ""}!
                  </div>
                )}
              </div>
            </Col>
            <HashLink to="#home2">
              <div className="arrowContainer">
                <BsFillArrowDownCircleFill size={40} className="arrow" />
              </div>
            </HashLink>
          </Row>
        </Container>
        <Home2 />
        <AsteroidField onAsteroidClick={handleAsteroidClick} />
      </Container>
    </section>
  );
}

export default Home;
