import React from 'react';
import './HomeBanner.CSS';
import { Col, Container, Row } from 'react-bootstrap';
// import coverimg from '../../../images/coverimg.png';
import coverimg from '../../../images/mycover.png';
import { HashLink } from 'react-router-hash-link';




const HomeBanner = () => {
    
    const url='https://drive.google.com/file/d/1-jK2xva-ZGNkzgza7FO4Lrh3CPX5Vkss/view?usp=sharing';

    




    return (
        
        
            <div style={{backgroundColor:'#f7f7f7',minHeight:'100vh',maxHeight:'auto' }} >
            
            <Container >

            <Row className="flex flex-lg-row flex-column-reverse justify-content-center align-items-center row-cols-lg-2 row-cols-1 py-5 ">
                
                <Col className="text-start mt-lg-0 mt-5 px-lg-0 px-4  ">
                    <h5 className="text-secondary ">Hello, I am</h5>
                    <h2 className="fw-bold">Md Ibrahim Adham Mesu</h2>
                    <h4 className="border-bottom border-top text-secondary py-2 w-50 mt-4">Front-End Developer</h4>
                    
                    
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

                    

                </Col>
                <Col>
                <img className="img-fluid" src={coverimg} alt="" width='100%' />

                </Col>

            </Row>
            </Container>
            </div>
            

        
    );
};

export default HomeBanner;