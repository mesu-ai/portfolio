import React from 'react';
import '../projects/Projects.css';
import { Card, Col} from 'react-bootstrap';


const ProjectCard = ({project}) => {
    const {projectName,catagory,picture}=project;
    console.log(picture[0]?.image1);
    return (
        <Col>
        <Card className="h-100 shadow-lg card">
            <Card.Img  variant="top" src={picture[0]?.image1} height='200px' />
            <Card.Body>
            <Card.Title>{projectName}</Card.Title>
            <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>

            <div className="card-overlay d-flex justify-content-center align-items-center">
                <button>Click Me</button>
          </div>
         
        </Card>
        </Col>
        
    );
};

export default ProjectCard;