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
              title="PhotoShop"
              description="Fully responsive Single Page App. Demo version of e-commerce website where user can add pictures to his favorites or to a cart and then choose the size and send an order.
              Build with React (Router, useState, useEffect, useContext, react-icons, forms)"
              link="https://rebashop.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              imgPath={tenzies}
              isBlog={false}
              title="Tenzies Game"
              description="The player can choose if he wants to play with doted dies or with numbered. When the player starts a game, the timer is running until he/she finds all same dies. And then confetti comes🎉 Build with React."
              link="https://tenzies-game-reba.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              imgPath={fastTyping}
              isBlog={false}
              title="Fast Typing Game"
              description="The player can choose if he wants to play with doted dies or with numbered. When the player starts a game, the timer is running until he/she finds all same dies. And then confetti comes🎉 Build with React."
              link="https://fast-typing-game-reba.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard

              imgPath={fastTyping}
              isBlog={false}
              title="Notes"
              description="The player can choose if he wants to play with doted dies or with numbered. When the player starts a game, the timer is running until he/she finds all same dies. And then confetti comes🎉 Build with React."
              link="https://notes-reba.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard

              imgPath={memes}
              isBlog={false}
              title="Memes Generator"
              description="The player can choose if he wants to play with doted dies or with numbered. When the player starts a game, the timer is running until he/she finds all same dies. And then confetti comes🎉 Build with React."
              link="https://meme-generator-reba.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={climbium}
              isBlog={false}
              title="CLIMBIUM"
              description="Website I build for my e-commerce busisness with WordPress, WooCommerce, HTML, and CSS"
              link="https://climbium.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instEco}
              isBlog={false}
              title="INST-ECO"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="http://insteco.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={podroze}
              isBlog={false}
              title="My travels"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
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
