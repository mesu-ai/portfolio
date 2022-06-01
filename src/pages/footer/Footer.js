import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
        <Container>
        {/* <hr style={{marginTop:'8px',marginBottom:'8px'}}/>
        <hr style={{marginTop:'8px',marginBottom:'8px'}}/> */}

        </Container>
        
        <div  className="pt-5 pb-3  footer-container ">
            <Container className='d-md-flex justify-content-md-between align-items-center'>
            <p className='mb-0'> &copy; 2021 || All Right Served By Md Ibrahim Adham Mesu</p>
            
            <p className="mt-4 ">
                    <a style={{textDecoration:'none'}} className="text-primary" href="#a" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook fs-4 me-4"></i></a>

                    <a style={{textDecoration:'none'}} href="https://github.com/mesu-ai" className="text-dark"target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github fs-4 me-4"></i></a>
                    <a style={{textDecoration:'none'}} className="text-primary" href="https://www.linkedin.com/in/iamesu/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin fs-4 me-4"></i></a>
                    
                    </p>
            </Container>
        </div>
        </>
    );
};

export default Footer;