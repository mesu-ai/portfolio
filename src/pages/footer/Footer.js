import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
        <Container>
        <hr style={{marginTop:'8px',marginBottom:'8px'}}/> <hr style={{marginTop:'8px',marginBottom:'8px'}}/>

        </Container>
        
        <div  className="py-4 footer-container text-white bg-secondary">
            <p>&copy; 2021 || All Right Served By Md Ibrahim Adham Mesu</p>
        </div>
        </>
    );
};

export default Footer;