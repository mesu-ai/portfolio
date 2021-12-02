import React from 'react';
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
        
       console.log(projectFind?.picture[0]?.img1);
        
    }

    // console.log(projectFind?.picture[0]?.img1);
    
   
      
    return (

        <div style={{}}>
           <ProjectSlider projectFind={projectFind} ></ProjectSlider>
           
        <Container>
           
            
            
        </Container>
        </div>
    );
};

export default ProjectDetails;