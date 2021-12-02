import React from 'react';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';
import AboutInfo from './aboutInfo/AboutInfo';
import Progress from './progress/Progress';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{minHeight:'100vh',maxHeight:'auto' }} className="py-5"  >
            
            <Container className="d-flex flex-column  justify-content-center align-items-center">
            <h3 className="fw-bold "> About Me</h3>

            <Row className="d-flex flex-lg-row flex-column-reverse  row-cols-lg-2 row-cols-1 py-5">
                
                <Col className="text-start mt-lg-0 mt-5 px-lg-2 px-4">

                   <AboutInfo/>

                    <Link to='/contact' >
                    <button style={{fontWeight:'450'}} type="button" className="btn btn-outline-dark border-2 rounded-pill  fs-5 mt-4 px-3">Contract Me <i className="bi bi-arrow-right ms-2"></i> </button>
                    </Link>
   

                </Col>
                
                <Col className="">
                
                <Progress/>

                </Col>

            </Row>
            </Container>
            </div>
    );
};

export default About;