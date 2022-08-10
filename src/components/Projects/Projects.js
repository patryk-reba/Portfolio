import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import instEco from "../../Assets/Projects/instEco.png";
import tenzies from "../../Assets/Projects/tenzies.png";
import podroze from "../../Assets/Projects/podroze.png";
import climbium from "../../Assets/Projects/climbium.png";
import photoshop from "../../Assets/Projects/photoshop.png";
import fastTyping from "../../Assets/Projects/fast-typing.png";
import memes from "../../Assets/Projects/memes.png";
import notes from "../../Assets/Projects/notes.png";
import pacman from "../../Assets/Projects/pacman.png";
import snake from "../../Assets/Projects/snake.png";
import chrome from "../../Assets/Projects/chrome.png";
import amazon from "../../Assets/Projects/amazon.png";
import twitter from "../../Assets/Projects/twitter.png";
import techpulse from "../../Assets/Projects/techpulse.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple ">PORTFOLIO </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>{" "}
        <h2 className="project-category">
          <strong className="purple">Current Job</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              style={{ textAlign: "left" }}
              imgPath={techpulse}
              isBlog={false}
              title="HP TechPulse"
              description={
                <>
                  <p>
                    HP TechPulse1 is a cloud-based telemetry and analytics
                    platform that aggregates critical data from devices and
                    applications, putting deep insights at IT’s fingertips to
                    predict and resolve device issues before they impact
                    employees.
                  </p>
                  <ul>
                    My role is:
                    <li>Adding new components and functionalities</li>
                    <li>Debugging</li>
                    <li>Code reviewing</li>
                  </ul>
                </>
              }
              tools="React • react-i18next • JavaScript • HTML • CSS • Highcharts "
              link="https://www.hp.com/us-en/services/techpulse.html"
            />
          </Col>
          <h2 className="project-category">
            <strong className="purple">Full-stack </strong>
          </h2>
          <Col md={4} className="project-card">
            <ProjectCard
              style={{ textAlign: "left" }}
              imgPath={twitter}
              isBlog={false}
              title="Twitter-clone"
              description={
                <ul>
                  <li>Users can Tweet and add comments</li>
                  <li>Login authentication with Twitter API using NextAuth</li>
                  <li>Ability to BAN a tweet via the Sanity Platform</li>
                  <li>Next.js</li>
                  <li>Sanity CMS</li>
                  <li> Tailwind CSS</li>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </ul>
              }
              tools="React • Typescript • Next.js • JavaScript • HTML • Tailwind CSS • Sanity CMS"
              // link="https://clone-f512b.firebaseapp.com/"
            />
          </Col>
        </Row>
        <h2>
          <strong className="purple">React JS</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tenzies}
              isBlog={false}
              title="Tenzies Game"
              description="The player can choose if he wants to play with doted dies or with numbered. When the game starts, the timer is running until all same dies are found. Then confetti comes🎉"
              tools="React • JavaScript • HTML • CSS"
              link="https://tenzies-game-reba.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fastTyping}
              isBlog={false}
              title="Fast Typing Game"
              description="Click enter and rewrite words from box above as fast as you can in 10 sec. and see how many words you can corectly rewrite in one minute. Check yourself!"
              tools="React • JavaScript • HTML • CSS"
              link="https://fast-typing-game-reba.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photoshop}
              isBlog={false}
              title="E-Photo"
              // description="Demo version of photo e-commerce"
              description="Fully responsive Single Page App. Demo version of e-commerce website where user can add pictures to favorite, to a cart and then choose the size and send an order."
              // Built with React (Router, useState, useEffect, useContext, react-icons, forms)
              tools="React • JavaScript • HTML • CSS"
              link="https://rebashop.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Notes"
              description="Notes app."
              tools="React • JavaScript • HTML • CSS"
              link="https://notes-reba.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memes}
              isBlog={false}
              title="Memes Generator"
              description="Elon Musk would be delighted!"
              tools="React • JavaScript • REST API • HTML • CSS"
              link="https://meme-generator-reba.netlify.app/"
            />
          </Col>
          <h2>
            <strong className="purple">Vanilla JavaScript </strong>
          </h2>
          <Col md={4} className="project-card">
            <ProjectCard
              style={{ textAlign: "center" }}
              imgPath={chrome}
              isBlog={false}
              title="Dashboard"
              description="Chrome extension built using several APIs"
              tools="JavaScript • HTML • CSS"
              link="https://dashboard-chrome.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              style={{ textAlign: "center" }}
              imgPath={pacman}
              isBlog={false}
              title="Pacman"
              description="Classic game built with JavaScript"
              tools="JavaScript • HTML • CSS"
              link="https://pacman-reba.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake"
              description="🐍Classic game built with JavaScript🐍 Nokia 3310, I miss you.."
              tools="JavaScript • HTML • CSS"
              link="https://snake-reba.netlify.app/"
            />
          </Col>
          <h2>
            <strong className="purple">WordPress</strong>
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={instEco}
                isBlog={false}
                title="INST-ECO"
                description="Business website I've made for INST-ECO company. "
                tools="WordPress • Elementor • HTML • CSS"
                link="http://insteco.pl/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={podroze}
                isBlog={false}
                title="My travels"
                description="Website with pictures and videos I've made during one year of backpacking."
                tools="WordPress • Elementor • HTML • CSS"
                link="http://reba95.webd.pro/podrozeksztalca.pl/"
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
