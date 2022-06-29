import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './ProjectFilter.css';

const ProjectFilter = ({handleProjectFilter}) => {
   
    return (
        <div id='projectFilter'>
            <Container className='rounded py-3 shadow-lg'>

                <Button onClick={()=>handleProjectFilter('all')}>All Site</Button>
                <Button onClick={()=>handleProjectFilter('e-com')}  className='mx-2'>E-commerce</Button>
                <Button onClick={()=>handleProjectFilter('niche')} >Niche Product</Button>
                <Button onClick={()=>handleProjectFilter('clinic')}  className='mx-2'>Clinical Site</Button>
                <Button onClick={()=>handleProjectFilter('landing')}>Landing Page</Button>

            </Container>

        </div>
    );
};

export default ProjectFilter;