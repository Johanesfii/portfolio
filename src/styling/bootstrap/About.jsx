import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./about.scss";
// import background from "./assets/gambar1.jpg";




export default function About() {
  return (
    

    <div className="About" id="about">
    <Container>
    <Row>
      <Col>
      <h3>Web Design & Web Development</h3>
      </Col>
    </Row>
    <Row>
    <Col>
    <h2>Johanes Edmund Fii</h2>
    </Col>
  </Row>
  <div className="parent">
    <Button variant="primary" a href="https://www.instagram.com/johanesfii/">IG Profile</Button>
    </div>
  </Container>
  </div>
  )
}
