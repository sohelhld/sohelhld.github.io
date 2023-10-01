import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../assets/my-pic.png";
import Particle from "../components/Particle";
import About from "../components/Home/About";
import Type from "../components/Home/Type";
import { Link } from "react-router-dom";

const Home = () => {
  
  
  return (
    <section id="home">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Sohel Rana Halder</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "1000px" }}
              />
            </Col>
          </Row>
         
        </Container>
      </Container>
      <About />
    </section>
  );
};

export default Home;
