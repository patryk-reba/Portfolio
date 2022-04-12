import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { GiMountainClimbing } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Patryk Reba </span>
            from <span className="purple"> Wrocław (WrocLove❤), Poland.</span>
            <br />Apart from coding, I am the owner of <a href="https://climbium.pl">

              CLIMBIUM Patryk Reba
            </a>
            ,
            <br></br>
            an e-commerce business, where
            we compose and deliver the best supplements for climbers.
            <br />
            <br />
            Some activities and interests that I love:
          </p>
          <ul>
            <li className="about-activity">
              🚀 Science and Technology.
            </li>
            <li className="about-activity">
              🎸 Guitar playing.
            </li>
            <li className="about-activity">
              <GiMountainClimbing /> Parkour, Climbing, Diving.
            </li>
            <li className="about-activity">
              ✈ Travelling.
              After graduation, I was backpacking for 1 year around south-east Asia.
              You can see my pictures and videos from my travel on {" "}
              <a href="http://reba95.webd.pro/podrozeksztalca.pl/#galeria">
                one of my website!
              </a>
            </li>

          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Except for time spent with friends and a night with a beautiful woman,
            there is nothing more beautiful than "aha!" moments when you try
            to solve a problem!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Patryk</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

// "Except for time spent with friends and a night with a beautiful girl,
// there is nothing more beautiful than "aha!" moments when you try
// to solve a problem!"{" "}