import React, { useEffect } from 'react';
import '../Projects.css';
import { Card, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProjectCard = ({project}) => {
    useEffect(()=>{
        AOS.init({
            
        });
        
    },[]);
    const {_id,projectName,cover_img,catagory}=project;
    
    //  console.log(project,picture[0]?.img1);

    const navigate=useNavigate();
    
    const handleDetails=(id)=> {
        const url=`/projectdetails/${id}`
        navigate(url);

    }


    return (
        
        <Col >
        
        <Card data-aos="zoom-in-right"  className=" h-100 shadow-lg card p-2" style={{borderRadius:'12px'}}>
            <Card.Img  variant="top" src={cover_img} height='200px' />
            <Card.Body>
            <Card.Title>{projectName}</Card.Title>
            <Card.Text style={{}} className="fw-bold text-primary fs-5">
                {catagory}
                
            </Card.Text>
            </Card.Body>

            <div className="card-overlay d-flex justify-content-center align-items-center" style={{borderRadius:'12px'}}>
                <button className="btn btn-light fs-5 fw-bold card-btn" onClick={()=>handleDetails(_id)}>View More <i className="fas fa-angle-double-right ms-2"></i></button>
          </div>
         
        </Card>
        </Col>
        
        
    );
};

export default ProjectCard;