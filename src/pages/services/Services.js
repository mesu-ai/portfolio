import React from 'react';
import { Container, Row } from 'react-bootstrap';
import webdev from '../../images/code-square.svg';
import webdesign from '../../images/cogs-solid.svg';
import contentcreate from '../../images/pencil-ruler-solid.svg';
import frontend from '../../images/react-brands.svg';
import backend from '../../images/server-solid.svg';
import ux from '../../images/tv-solid.svg';
import ServiceCard from './ServiceCard';


const services=[
    {   'icon':webdev,
        'serviceName':'Coplete Website',
        'sortDetails':''
    },
    {   'icon':frontend,
        'serviceName':'Front-End Development',
        'sortDetails':''
    },
    {   'icon':backend,
        'serviceName':'Back-End Development',
        'sortDetails':''
    },
    {   'icon':ux,
        'serviceName':'UX/UI Design',
        'sortDetails':''
    },
    {   'icon':webdesign,
        'serviceName':'Web Design',
        'sortDetails':''
    },
    {   'icon':contentcreate,
        'serviceName':'Content Creating',
        'sortDetails':''
    },
]

const Services = () => {
    return (
        <div style={{backgroundColor:'#f7f7f7',minHeight:'100vh',maxHeight:'auto' }}>
            <Container className="py-5">
            
            <h3 className="mb-5 fw-bold">My Services</h3>
            
            <Row xs={1} md={2} lg={3} className="g-4 mt-1">
            {
            services.map(service=><ServiceCard service={service} key={Math.random()}></ServiceCard>)
            }
  
           </Row>
           </Container>
        </div>
    );
};

export default Services;