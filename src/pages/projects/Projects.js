import React from "react";
import {Container, Row} from "react-bootstrap";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "./projectCard/ProjectCard";


const Projects = () => {
  const [projects]=useProjects();


    return (
        <div style={{backgroundColor:'',minHeight:'100vh',maxHeight:'auto' }} className="my-4 py-5">
            <Container>
            <h3 className="fw-bold">My Projects</h3>
            <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center align-items-center my-5">
                {
                   projects.map(project=><ProjectCard key={Math.random()} project={project}></ProjectCard>)
                }
            </Row>
            </Container>
            
        </div>
    );
};

export default Projects;