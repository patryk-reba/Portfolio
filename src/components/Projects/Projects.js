import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import earthImage from "../../Assets/earth.png";
import mobile from "../../Assets/Projects/mobile.png";

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
import voith from "../../Assets/Projects/voith.webp";
import dashboard from "../../Assets/Projects/nextjs-dashboard.png";
import ai2 from "../../Assets/Projects/ai2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <div className="flying-earth-container">
        <img src={earthImage} alt="Flying Earth" className="flying-earth" />
      </div>
      <Container>
        {/* Mobile Apps section */}
        <h2 className="project-heading" style={{ marginTop: "20px" }}>
          <strong className="purple">MOBILE</strong> APPS
        </h2>
        <Row className="mobile-ai-chat-section">
          <Col md={5} className="mobile-ai-chat-image">
            <img
              src={mobile}
              alt="Mobile AI Chat"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={7} className="mobile-ai-chat-description">
            <h3 className="project-heading">Mobile AI Chat</h3>
            <p className="project-description">
              An advanced mobile AI chat application leveraging OpenAI's
              cutting-edge technologies:
            </p>
            <h4 className="feature-heading">Key features:</h4>
            <ul className="project-features">
              <li>Intelligent conversations powered by GPT-4</li>
              <li>Image generation using DALL-E</li>
              <li>Real-time chat with context-aware responses</li>
              <li>Dark/light theme toggle for comfortable viewing</li>
              <li>Chat history management and persistence</li>
            </ul>
            <h4 className="feature-heading">AI Integration:</h4>
            <ul className="project-features">
              <li>
                OpenAI's GPT-4 API for natural language processing and
                generation
              </li>
              <li>
                DALL-E API for creating unique images based on text prompts
              </li>
              <li>Custom prompt engineering for optimized AI responses</li>
              <li>
                Seamless integration of text and image generation capabilities
              </li>
            </ul>
            <h4 className="feature-heading">Technologies used:</h4>
            <ul className="project-features">
              <li>React Native for cross-platform mobile development</li>
              <li>TypeScript for enhanced code reliability</li>
              <li>AsyncStorage for local data persistence</li>
              <li>Custom API integration for OpenAI services</li>
              <li>React Native's Animated API for smooth UI transitions</li>
            </ul>
            <p className="project-conclusion">
              This app showcases the power of combining React Native with
              state-of-the-art AI technologies, offering users an immersive and
              intelligent mobile chat experience.
            </p>
          </Col>
        </Row>

        {/* Web Apps section */}
        <h2 className="project-heading">
          <strong className="purple">WEB</strong> APPS
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              style={{ textAlign: "left" }}
              imgPath={ai2}
              isBlog={false}
              title="Reba AI"
              description={
                <>
                  <ul>
                    <li>
                      Secure access with robust registration, login, and route
                      protection.
                    </li>
                    <li>
                      Interact with Alice, the GPT-4 powered chat assistant, for
                      instant support and guidance.
                    </li>
                    <li>
                      Generate new images with text prompts using Dall-E AI
                      creativity.
                    </li>
                    <li>
                      Find images quickly with advanced search by content or
                      objects.
                    </li>
                    <li>
                      Revive old or damaged images with the restoration feature.
                    </li>
                    <li>
                      Customize images by replacing objects with desired colors.
                    </li>
                    <li>Fill in missing areas of images seamlessly.</li>
                    <li>Remove unwanted objects with precision.</li>
                    <li>Extract objects from backgrounds easily.</li>
                    <li>
                      Download and share AI-transformed images conveniently.
                    </li>
                    <li>View details of each transformation process.</li>
                    <li>
                      Manage transformations with options to delete and update.
                    </li>
                    <li>Use credits to access image transformations.</li>
                    <li>
                      Access transformed images and credits on the profile page.
                    </li>
                    <li>Buy credits securely via Stripe.</li>
                    <li>Enjoy a seamless experience across all devices.</li>
                    <li>
                      Switch between light and dark modes as per preference.
                    </li>
                  </ul>
                </>
              }
              tools="Next.js • MongoDB • TypeScript • Dall-E • GPT-4 • TailwindCSS • Clerk • Cloudinary • Stripe • Shadcn • React Hook Form"
              link="https://reba-ai.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              style={{ textAlign: "left" }}
              imgPath={voith}
              isBlog={false}
              title="Voith Shop"
              description={
                <>
                  <ul>
                    <li>
                      Worked on Large-Scale, Multi-Language E-Commerce Store.
                    </li>
                    <li>
                      Collaborated with businesses to enhance UI/UX, improving
                      user experience and website effectiveness.
                    </li>
                    <li>
                      Transitioned from Bootstrap to Tailwind CSS, adopting a
                      more streamlined and flexible design approach.
                      Standardized site design through the creation of a style
                      guide and Storybook, utilizing Tailwind CSS and Atomic
                      Design principles, ensuring consistent sizing, spacing,
                      and typography.
                    </li>
                    Rapidly reduced frontend development backlog, enabling the
                    team to catch up within two sprints after joining.
                    <li>
                      Aligned UI/UX designs using tools like StoryBook and
                      Figma, coordinating with backend developers for smooth
                      integration.
                    </li>
                    <li>
                      Tested and ensured reusable components functionality,
                      cleaned up legacy code and avoided technical debt during
                      the redesign process, meeting all user story acceptance
                      criteria.
                    </li>
                    Integrated analytics tool to track events on the website.
                    Improved overall workflow and communication by proposing
                    developers join business meetings.
                    <li>Hire senior developers</li>
                  </ul>
                </>
              }
              tools="React • Bootstrap • TypeScript • NestJS • Bootstrap • Tailwind CSS • Redux • Web Components • Formik • Storybook • JEST • React testing library • JSDOCS"
              link="https://vpwebshop.apps.cloud.voith.com/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <p style={{ color: "white" }}>
            Here are a few personal projects I've worked on recently:
          </p>{" "} */}
          {/* <h2 className="project-category">
            <strong className="purple">Full-stack </strong>
          </h2> */}
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              style={{ textAlign: "left" }}
              imgPath={amazon}
              isBlog={false}
              title="Amazon-clone"
              description={
                <ul>
                  <li>Checkout/payment page with stripe functionality</li>
                  <li>React context API</li>
                  <li>
                    Login Page with full login functionality (sign up and sign
                    in) with firebase authentication
                  </li>
                  <li>Cloud function to process payment (servesless)</li>
                  <li>Firebase for real time database</li>
                  <li>Deployed LIVE on Firebase</li>
                  <li>Stores orders for logged in user</li>
                  <li>Geolocation</li>
                  <li>Responsive Design</li>
                </ul>
              }
              tools="React • Firebase • JavaScript • HTML • CSS"
              link="https://clone-f512b.firebaseapp.com/"
            />
          </Col>
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
                </ul>
              }
              tools="React • Typescript • Next.js • JavaScript • HTML • Tailwind CSS • Sanity CMS"
              link="https://clone-f512b.firebaseapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              style={{ textAlign: "left" }}
              imgPath={dashboard}
              isBlog={false}
              title="Next.js Dashboard"
              description={
                <ul>
                  <li style={{ fontWeight: "700" }}>
                    Email: user@nextmail.com <br />
                    Password: 123456
                  </li>
                  <li>A public home page.</li>
                  <li>A login page</li>
                  <li>Dashboard pages that are protected by authentication</li>
                  <li>
                    The ability for users to add, edit, and delete invoices.
                  </li>
                  <li>PostgreSQL database</li>
                  <li> Tailwind CSS</li>
                </ul>
              }
              tools="React • Typescript • Next.js • JavaScript • HTML • Tailwind CSS • Sanity CMS"
              link="https://reba-nextjs-dashboard.vercel.app/"
            />
          </Col>
        </Row>
        {/* <h2>
          <strong className="purple">React JS</strong>
        </h2> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tenzies}
              isBlog={false}
              title="Tenzies Game"
              description="The player can choose if he wants to play with doted dies or with numbered. When the game starts, the timer is running until all same dies are found. Then confetti comes🎉"
              tools="React • JavaScript • HTML • CSS"
              link="https://tenzies-game-123.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fastTyping}
              isBlog={false}
              title="Fast Typing Game"
              description="Click enter and rewrite words from box above as fast as you can in 10 sec. and see how many words you can corectly rewrite in one minute. Check yourself!"
              tools="React • JavaScript • HTML • CSS"
              link="https://fast-typing-game-123.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Notes"
              description={<>"Notes app."</>}
              tools="React • JavaScript • HTML • CSS"
              link="https://notes-123.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photoshop}
              isBlog={false}
              title="E-Photo"
              // description="Demo version of photo e-commerce"

              description={
                <>
                  Fully responsive Single Page App. Demo version of e-commerce
                  website where user can add pictures to favorite, to a cart and
                  then choose the size and send an order.
                </>
              }
              // Built with React (Router, useState, useEffect, useContext, react-icons, forms)
              tools="React • JavaScript • HTML • CSS"
              link="https://ephoto-123.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memes}
              isBlog={false}
              title="Memes Generator"
              description={<>Elon Musk would be delighted!</>}
              tools="React • JavaScript • REST API • HTML • CSS"
              link="https://meme-generator-123.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              style={{ textAlign: "left" }}
              imgPath={techpulse}
              isBlog={false}
              title="HP TechPulse"
              description={
                <>
                  <p>
                    HP TechPulse is a cloud-based telemetry and analytics
                    platform that aggregates critical data from devices and
                    applications, putting deep insights at IT's fingertips to
                    predict and resolve device issues before they impact
                    employees.
                  </p>
                </>
              }
              tools="React • react-i18next • JavaScript • HTML • CSS • Highcharts "
              link="https://www.hp.com/us-en/services/techpulse.html"
            />
          </Col>
          {/* <h2>
            <strong className="purple">Vanilla JavaScript </strong>
          </h2> */}
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
              link="https://pacman-123.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake"
              description="🐍Classic game built with JavaScript🐍 Nokia 3310, I miss you.."
              tools="JavaScript • HTML • CSS"
              link="https://snake-123.netlify.app/"
            />
          </Col>
          {/* <h2>
            <strong className="purple">WordPress</strong>
          </h2> */}
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={climbium}
                isBlog={false}
                title="CLIMBIUM"
                description="Website I built for my e-commerce business"
                tools="WordPress • WooCommerce • Elementor • HTML • CSS"
                link="https://climbium.pl/"
              />
            </Col>
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
