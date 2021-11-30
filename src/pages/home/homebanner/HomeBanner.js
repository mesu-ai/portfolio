import React from 'react';
import './HomeBanner.CSS';
import { Col, Container, Row } from 'react-bootstrap';
import coverimg from '../../../images/coverimg.png';



const HomeBanner = () => {
    return (
        
        // height:'100vh'
            <div style={{backgroundColor:'#f7f7f7' }} >
            
            <Container >

            <Row className="flex flex-lg-row flex-column-reverse justify-content-center align-items-center row-cols-lg-2 row-cols-1 ">
                
                <Col className="text-start mt-lg-0 mt-5 ms-lg-0 ms-4">
                    <h5 className="text-secondary">Hello, I am</h5>
                    <h2 className="fw-bold">Md Ibrahim Adham Mesu</h2>
                    <h4 className="border-bottom border-top text-secondary py-2 w-50 mt-4">Front-End Developer</h4>
                    
                    {/* <h5>I design and code to keep the user interface friendly and I like what I do.</h5> */}
                    <p>
                    <i className="bi bi-facebook fs-4 me-4"></i>
                    <i className="bi bi-github fs-4 me-4"></i>
                    <i className="bi bi-linkedin fs-4 me-4"></i></p>

                    <button style={{fontWeight:'450'}} type="button" class="btn btn-outline-dark border-2 rounded-pill  fs-5 mt-5 px-3"> <i class="bi bi-arrow-down-circle-fill me-3"></i> Download My Resume</button>

                    

                </Col>
                <Col>
                <img className="img-fluid" src={coverimg} alt="" />

                </Col>

            </Row>
            </Container>
            </div>
            

        
    );
};

export default HomeBanner;