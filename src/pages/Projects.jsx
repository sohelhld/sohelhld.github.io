import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/project.jpeg";

import { projects } from "../data/project";
const Projects = () => {
  console.log(project)
  return (
    <Container id="project" fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projects[0].imgPath}
              isBlog={false}
              title={projects[0].title}
              description={projects[0].description}
              ghLink={projects[0].ghLink}
              liveLink = {projects[0].liveLink}
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={projects[1].imgPath}
              isBlog={false}
              title={projects[1].title}
              description={projects[1].description}
              ghLink={projects[1].ghLink}
              liveLink = {projects[1].liveLink}
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={projects[2].imgPath}
              isBlog={false}
              title={projects[2].title}
              description={projects[2].description}
              ghLink={projects[2].ghLink}
              liveLink = {projects[2].liveLink}
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={projects[3].imgPath}
              isBlog={false}
              title={projects[3].title}
              description={projects[3].description}
              ghLink={projects[3].ghLink}
              liveLink = {projects[3].liveLink}
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  )
}

export default Projects