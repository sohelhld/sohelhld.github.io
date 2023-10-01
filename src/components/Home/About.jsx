import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./about.css"

const About = () => {
  const downloadResume = ()=>{
    // console.log("downloadResume")
      const url = "https://drive.google.com/uc?export=download&id=1c4CWSIZQFCwvD_qvcuLH_7MnckUurYZx"
      window.open(url,"_blank")
      
  }

    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
          <Row id="resumeButton" >
            <Col>
              <Button
                onClick={downloadResume}
                 variant="primary"
                style={{ zIndex: 9999 ,color:"blue",backgroundColor:"white"}}
                // className="sticky navbar navbar-expand-md navbar-light"
              >
              Resume
              </Button>
              <Button href="/#contact" variant="primary" style={{ marginLeft: "40px" }}>
                Contact Me
              </Button>
            </Col>
          </Row>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Sohel Rana Halder </span>
                 and I'm from <span className="yellow"> Kolkata, India.</span>
                <br />
                <br />
                I graduated with a B.Tech degree in Electrical Engineering  in 2020.
                <br />
                <br />
                  As a
                  <b className="yellow"> Full-Stack </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> Javascript, </b>
                    as well as have knowledge in programming languages such as 
                  <b className="yellow"> HTML,CSS ,Javascript.</b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">Node.js, MongoDB,</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className="yellow"> Artificial Intelligence.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            
          </Container>
        </Container>
      );
    
}

export default About