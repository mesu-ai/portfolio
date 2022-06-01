import React from 'react';
import { Container, Row } from 'react-bootstrap';
import DevCard from './DevCard';


const devinfos=[
    {
        'id':'1',
        'itemName':'Total Projects',
        'serviceInfo':'12',
        'infoImg':'',
    },
    {   'id':'2',
        'itemName':'Total Projects',
        'serviceInfo':'',
        'infoImg':'',
    },
    {   'id':'3',
        'itemName':'Overal Experience',
        'serviceInfo':'1.5 years',
        'infoImg':'',
    }

]

const DevInfo = () => {
    return (
        <div style={{backgroundColor:'#f7f7f7',minHeight:'100vh',maxHeight:'auto' }}>
            <Container className="py-5">
            
            <h3 className="mb-5 fw-bold">My Services</h3>
            
            <Row xs={1} md={2} lg={3} className="g-4 mt-1">
            {
            devinfos.map(info=><DevCard info={info} key={info.id}/>)
            }
  
           </Row>
           </Container>
        </div>
    );
};

export default DevInfo;