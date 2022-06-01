import React from 'react';
import { Container, Row } from 'react-bootstrap';
import DevCard from './DevCard';

const devinfos=[
    {
        'id':1,
        'img':'',
        'title':'',
        'serviceInfo':''
    },
    {
        'id':1,
        'img':'',
        'title':'',
        'serviceInfo':''
    },
    {
        'id':1,
        'img':'',
        'title':'',
        'serviceInfo':''
    }
]

const DevInfo = () => {
    return (
        <div style={{backgroundColor:'#f7f7f7',minHeight:'100vh',maxHeight:'auto' }}>
        <Container className="py-5">
        
        <h3 className="mb-5 fw-bold">My Services</h3>
        
        <Row xs={1} md={2} lg={3} className="g-4 mt-1">
        {
        devinfos.map(service=><DevCard></DevCard>)
        }

       </Row>
       </Container>
    </div>
    );
};

export default DevInfo;