import React, { useEffect } from 'react';
import './HomeBanner.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
// import coverimg from '../../../images/coverimg.png';
import coverimg from '../../../images/mycover.png';
import { HashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';




const HomeBanner = () => {
    useEffect(()=>{
        AOS.init({
            
        });
        
    },[]);
    
    
    const url='https://drive.google.com/file/d/1NWBU1kKEAPgmxRDviUzkCw7zlD8Rgcps/view?usp=sharing';

    

    return (
        
        
            <div style={{backgroundColor:'aliceblue',minHeight:'100vh',maxHeight:'auto' }} >
            
            <Container >

            <Row className="flex flex-lg-row flex-column-reverse justify-content-center align-items-center row-cols-lg-2 row-cols-1 py-5 ">
                
                <Col data-aos="fade-right" className="text-start mt-lg-0 mt-5 px-lg-0 px-4  ">
                 {/* <Card > */}
                    <h5 className="text-secondary ">Hello, I am</h5>
                    <h2 className="fw-bold">Md Ibrahim Adham Mesu</h2>
                    <h4 className="border-bottom border-top text-secondary py-2 w-75 mt-4">Front-End Developer</h4>
                    
                    
                    <p className="mt-4 ">
                    <a style={{textDecoration:'none'}} className="text-secondary" href="#a" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook fs-4 me-4"></i></a>

                    <a style={{textDecoration:'none'}} href="https://github.com/mesu-ai" className="text-secondary"target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github fs-4 me-4"></i></a>
                    <a style={{textDecoration:'none'}} className="text-secondary" href="https://www.linkedin.com/in/iamesu/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin fs-4 me-4"></i></a>
                    
                    </p>

                    <a as={HashLink} target="_blank" href={url} rel="noreferrer">
                    <button style={{fontWeight:'450'}} type="button" className="btn btn-outline-dark border-2 rounded-pill  fs-5 mt-4 px-3"> <i className="bi bi-arrow-down-circle-fill me-2"></i> Download My Resume</button>
                    </a>

                {/* </Card> */}

                </Col>
                <Col>
                <img className="img-fluid myImg" src={coverimg} alt="" width='100%' />

                </Col>

            </Row>
            </Container>
            </div>
            

        
    );
};

export default HomeBanner;