import React from "react";
import {Container, Row} from "react-bootstrap";
import ProjectCard from "./projectCard/ProjectCard";


const projects=[
    {
        "projectName":"Car House",
        "catagory":"Niche Product Website",
        "liveSite":"https://car-house-bd.web.app/",
        "frontEndCode":"https://github.com/mesu-ai/car-house",
        "backEndCode":"https://github.com/mesu-ai/car-house-server",
        "picture": [
            {"image1":"https://i.ibb.co/pxqhYqK/car1.png"} ,
            {"image2":"https://i.ibb.co/hfvtMjS/car2.png"},
            {"image3":"https://i.ibb.co/YjdSrb7/car3.png"},
        ]

     },
    {
        "projectName":"Car House",
        "catagory":"Niche Product Website",
        "liveSite":"https://car-house-bd.web.app/",
        "frontEndCode":"https://github.com/mesu-ai/car-house",
        "backEndCode":"https://github.com/mesu-ai/car-house-server",
        "picture": [
            {"image1":"https://i.ibb.co/pxqhYqK/car1.png"} ,
            {"image2":"https://i.ibb.co/hfvtMjS/car2.png"},
            {"image3":"https://i.ibb.co/YjdSrb7/car3.png"},
        ]

     },
    {
        "projectName":"Car House",
        "catagory":"Niche Product Website",
        "liveSite":"https://car-house-bd.web.app/",
        "frontEndCode":"https://github.com/mesu-ai/car-house",
        "backEndCode":"https://github.com/mesu-ai/car-house-server",
        "picture": [
            {"image1":"https://i.ibb.co/pxqhYqK/car1.png"} ,
            {"image2":"https://i.ibb.co/hfvtMjS/car2.png"},
            {"image3":"https://i.ibb.co/YjdSrb7/car3.png"},
        ]

     },
]

const Projects = () => {
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