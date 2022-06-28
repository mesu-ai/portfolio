import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './ProjectFilter.css';

const ProjectFilter = () => {
    return (
        <div id='projectFilter'>
            <Container className=' rounded py-3 shadow-lg'>

                <Button >All Site</Button>
                <Button  className='mx-2'>E-com</Button>
                <Button >Nice Product</Button>
                <Button  className='mx-2'>Clinical Site</Button>
                <Button >Landing Page</Button>


            </Container>

        </div>
    );
};

export default ProjectFilter;