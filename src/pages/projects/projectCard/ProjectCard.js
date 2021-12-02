import React from 'react';
import '../Projects.css';
import { Card, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router';


const ProjectCard = ({project}) => {
    const {_id,projectName,cover_img,details}=project;
    
    //  console.log(project,picture[0]?.img1);

    const navigate=useNavigate();
    
    const handleDetails=(id)=> {
        const url=`/projectdetails/${id}`
        navigate(url);

    }


    return (
        
        <Col>
        <Card className=" h-100 shadow-lg card">
            <Card.Img  variant="top" src={cover_img} height='200px' />
            <Card.Body>
            <Card.Title>{projectName}</Card.Title>
            <Card.Text style={{textAlign:'justify'}}>
                {details}
                
                {/* This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer. */}
            </Card.Text>
            </Card.Body>

            <div className="card-overlay d-flex justify-content-center align-items-center">
                <button className="btn btn-light fs-5 fw-bold card-btn" onClick={()=>handleDetails(_id)}>View More <i className="fas fa-angle-double-right ms-2"></i></button>
          </div>
         
        </Card>
        </Col>
        
        
    );
};

export default ProjectCard;