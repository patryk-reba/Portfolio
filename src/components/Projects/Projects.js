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




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">PORTFOLIO </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photoshop}
              isBlog={false}
              title="E-Photo"
              description="Fully responsive Single Page App. Demo version of e-commerce website where user can add pictures to his favorites or to a cart and then choose the size and send an order."
              // Build with React (Router, useState, useEffect, useContext, react-icons, forms)
              tools="React • JavaScript • HTML • CSS"
              link="https://rebashop.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              imgPath={tenzies}
              isBlog={false}
              title="Tenzies Game"
              description="The player can choose if he wants to play with doted dies or with numbered. When the player starts a game, the timer is running until he/she finds all same dies. And then confetti comes🎉"
              tools="React • JavaScript • HTML • CSS"
              link="https://tenzies-game-reba.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              imgPath={fastTyping}
              isBlog={false}
              title="Fast Typing Game"
              description="Click enter and rewrite words from box above as fast as you can i 10 sec. and see how many words you can corectly rewrite in one minute"
              tools="React • JavaScript • HTML • CSS"
              link="https://fast-typing-game-reba.netlify.app/"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pacman}
              isBlog={false}
              title="Pacman"
              description="Classic game build with JavaScript"
              tools="JavaScript • HTML • CSS"
              link="https://pacman-reba.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake"
              description="Classic game build with JavaScript"
              tools="JavaScript • HTML • CSS"
              link="https://snake-reba.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={climbium}
              isBlog={false}
              title="CLIMBIUM"
              description="Website I build for my e-commerce busisness"
              tools="WordPress • WooCommerce • Elementor • HTML • CSS"
              link="https://climbium.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instEco}
              isBlog={false}
              title="INST-ECO"
              description="Busissnes website I've made for INST-ECO company. "
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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            /> 
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
