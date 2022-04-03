import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Patryk Reba </span>
            from <span className="purple"> Wrocław (WrocLove❤), Poland.</span>
            <br />I am owner of CLIMBIUM Patryk Reba, e-commerce buisness, where
            we sell supplements for climbers.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Parkour
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              🎸 Guitar playing.
            </li>
            <li className="about-activity">
              🚀 Science.
            </li>
            <li className="about-activity">
              <ImPointRight /> Rock climbing.
            </li>
            <li className="about-activity">
              ✈ Travelling.
              You can see my pictures and viedeos from travel on {" "}
              <a href="http://reba95.webd.pro/podrozeksztalca.pl/#galeria">
                one of my website!
              </a>
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Except for time spent with friends and a night with a beautiful girl,
            there is nothing more beautiful than "aha!" moments when you try
            to solve a problem!"{" "}
          </p>
          <footer className="blockquote-footer">Patryk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
