import React from "react";
import {Button, Container, Row} from "react-bootstrap";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "./projectCard/ProjectCard";


const Projects = () => {
  const [projects]=useProjects();


    return (
        <div  style={{backgroundColor:'',minHeight:'100vh',maxHeight:'auto' }} className="my-4 py-5">
            <Container>
            <h3 className="fw-bold">My Projects</h3>
            <div className="my-5">
             <p className="text-start fs-5">I have worked on many projects. See some of my specific work. </p>
            <hr />
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                   projects.map(project=><ProjectCard key={Math.random()} project={project}></ProjectCard>)
                }
            </Row>
            <hr />
            <div className="text-start">
            <Button className="MoreProjectBtn btn-outline-warning">Click For More<i className="bi bi-arrow-right ms-1 fw-bold"></i></Button>
            </div>

            </div>
            </Container>
            
        </div>
    );
};

export default Projects;