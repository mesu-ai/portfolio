import React from 'react';
import { Container, Row } from 'react-bootstrap';
import DevCard from './DevCard';
import exp from '../../../images/devinfo/person-hiking-solid.svg'
import tp from '../../../images/devinfo/list-check-solid.svg'
import skill from '../../../images/devinfo/code-square.svg'

const devinfos=[
    {
        'id':1,
        'img':tp,
        'title':'Total Projects',
        'serviceInfo':'12'
    },
    {
        'id':2,
        'img':skill,
        'title':'Skills',
        'serviceInfo':'11',
        'icons':[
            { 
            'icon1':"fa-brands fa-react",
            },
            {'icon1':"bi bi-facebook fs-4"}

        ]
    },
    {
        'id':3,
        'img':exp,
        'title':'Overal Experience',
        'serviceInfo':'1.5'
    }
]

const DevInfo = () => {
    return (
        <div style={{backgroundColor:'#f7f7f7',minHeight:'100vh',maxHeight:'auto' }}>
        <Container className="py-5">
        
        <h3 className="mb-5 fw-bold">Development Information</h3>
        
        <Row xs={1} md={2} lg={3} className="g-4 mt-1">
        {
        devinfos.map(info=><DevCard info={info} key={info.id}></DevCard>)
        }

       </Row>
       </Container>
    </div>
    );
};

export default DevInfo;