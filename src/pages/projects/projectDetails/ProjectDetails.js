import React from 'react';
import '../Projects.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useProjects from '../../../hooks/useProjects';
import ProjectSlider from '../projectSlider/ProjectSlider';
import LanguageUse from '../languageUse/LanguageUse';
import { HashLink } from 'react-router-hash-link';

const ProjectDetails = () => {

    const [projects] = useProjects();

    
    
    const {id} = useParams();
    let selectedProject;

    if(projects==null){
        console.log('wait');

    }else{
        selectedProject = projects.find(project=>project._id===id);

    }

    let projectFind;
    if(selectedProject==null){

    }else{  
        projectFind=selectedProject;
        
    }

    
    if(projectFind?.picture[0]?.img1==null){

    }else{
        
    //    console.log(projectFind?.picture[0]?.img1);
        
    }

    //  console.log(projectFind.liveSite);
    
   
      
    return (

        <div >
           <ProjectSlider projectFind={projectFind} ></ProjectSlider>
           
        
            <div className="py-4 d-flex flex-lg-row flex-md-row flex-column justify-content-center bg-dark">
                
               <a className="btn fw-bold btn-outline-dark custom-btn px-3 mx-3 rounded-pill" href={projectFind?.liveSite} target="_blank" rel="noopener noreferrer">
               <i className="fas fa-globe me-2"></i>Live Site</a>

                <a className="btn fw-bold  btn-outline-dark custom-btn px-3 mx-3 my-3 my-lg-0 my-md-0 rounded-pill" as={HashLink} href={projectFind?.frontEndCode} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github me-2"></i> Front-End Code</a>

                <a className="btn fw-bold btn-outline-dark custom-btn px-3 mx-3 rounded-pill" href={projectFind?.frontEndCode} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github me-2"></i> Back-End Code</a>
            </div>
            
            

            <div style={{minHeight:'100vh',maxHeight:'auto',backgroundColor:'#f7f7f7' }} className="py-5"  >
            
            <Container>
            <Row className="d-flex flex-lg-row flex-column-reverse  row-cols-lg-2 row-cols-1 py-5 ">
            <Col className="text-start mt-lg-0 mt-5 px-lg-2 px-5">

        

            <p className="pe-lg-5 " style={{textAlign:'justify',fontSize:'20px'}}> 
            <span className="fw-bold fs-4">About:</span>
             <br/>
            {projectFind?.details}</p>
            
            <h5 className="pe-lg-5" style={{textAlign:'justify'}}> 
            <span className="fw-bold fs-4">Tecnology Use:</span> 
            <br /> 
            {projectFind?.tecnology}</h5>
           
            </Col>

            <Col className="px-lg-2 px-5">
            <LanguageUse projectFind={projectFind}></LanguageUse>          
            </Col>
                
            </Row>
            </Container>
            </div>
           
        </div>
    );
};

export default ProjectDetails;