import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ borderRadius: "20" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={props.style}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ color: "#a588c0" }}>
          {props.tools}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank" className="project-btn">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
