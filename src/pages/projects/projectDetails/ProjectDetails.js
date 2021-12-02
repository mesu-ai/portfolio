import React from 'react';
import '../Projects.css';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useProjects from '../../../hooks/useProjects';
import ProjectSlider from '../projectSlider/ProjectSlider';

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

        <div style={{}}>
           <ProjectSlider projectFind={projectFind} ></ProjectSlider>
           
        <Container>
            <div className="py-3 d-flex flex-lg-row flex-md-row flex-column justify-content-center ">
                <a href={projectFind?.liveSite} target="_blank" rel="noopener noreferrer">
                <button className="btn fw-bold btn-outline-dark custom-btn px-3 mx-3 "><i className="fab fa-ioxhost me-2"></i>Live Site</button></a>
                <button className="btn fw-bold  btn-outline-dark custom-btn px-3 mx-3 my-3 my-lg-0 my-md-0"><i className="fab fa-github me-2"></i> Front-End Code</button>
                <button className="btn fw-bold btn-outline-dark custom-btn px-3 mx-3"><i className="fab fa-github me-2"></i> Back-End Code</button>
            </div>
           
            
            
        </Container>
        </div>
    );
};

export default ProjectDetails;