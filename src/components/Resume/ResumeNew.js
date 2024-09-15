import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/patryk_reba.pdf";
import cv from "../../Assets/../Assets/cv.png";
import cv2 from "../../Assets/../Assets/cv2.png";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import earthImage from "../../Assets/earth.png"; // Make sure to import the Earth image

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://github.com/patryk-reba/Portfolio/blob/ee874d69b193c2520771d7fe9dc243ec53160638/src/Assets/patryk_reba.pdf";
// "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";
// zamiast tego pdf dam tu po prostu JPG
function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [audioSrc, setAudioSrc] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);

    // Load audio file
    import("../../Assets/podcast.wav").then((audio) => {
      setAudioSrc(audio.default);
    });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        {/* Add the podcast section here */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} style={{ paddingBottom: "50px" }}>
            <h2 className="project-heading">
              {" "}
              <b className="purple">PODCAST</b> about my resume
            </h2>
            {audioSrc && (
              <audio controls style={{ width: "100%", marginTop: "20px" }}>
                <source src={audioSrc} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            )}
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <img
            src={cv}
            style={{
              width: "60%",
              maxWidth: "700px",
              opacity: 0.7, // Add this line for transparency
            }}
          />
          <img
            src={cv2}
            style={{
              width: "60%",
              maxWidth: "700px",
              opacity: 0.7, // Add this line for transparency
            }}
          />
        </Row>
        <Row className="resume">
          {/* <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document> */}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
