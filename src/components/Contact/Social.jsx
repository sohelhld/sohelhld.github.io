import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Social.css";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";

const Social = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className="contact-text">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/sohelhld"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://twitter.com/RockyRo49911695"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/sohel-rana-halder-603a16244/"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="mailto:haldersohelrana@gmail.com"
                className="icon-color  contact-social-icons"
              >
                <SiGmail />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href={`tel:+91 8479054542`}
                className="icon-color  contact-social-icons"
              >
                <IoMdCall />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
