import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
        <Container>
        <hr style={{marginTop:'8px',marginBottom:'8px'}}/> <hr style={{marginTop:'8px',marginBottom:'8px'}}/>

        </Container>
        
        <div  className="py-4 footer-container text-white">
            <p>Copyright &copy; 2021 || All Right Served By Md Ibrahim Adham Mesu</p>
            
            <p className="mt-4 ">
                    <a style={{textDecoration:'none'}} className="text-primary" href="#a" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook fs-4 me-4"></i></a>

                    <a style={{textDecoration:'none'}} href="https://github.com/mesu-ai" className="text-light"target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github fs-4 me-4"></i></a>
                    <a style={{textDecoration:'none'}} className="text-info" href="https://www.linkedin.com/in/iamesu/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin fs-4 me-4"></i></a>
                    
                    </p>
        </div>
        </>
    );
};

export default Footer;