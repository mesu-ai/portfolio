import React from 'react';
import './Nabbar.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { HashLink} from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" sticky="top">
        <Container>
        <Navbar.Brand href="#home">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto ">
       
        <NavLink  className="nav-item mt-lg-0 mt-2" as={HashLink} to='/home'>HOME</NavLink>
        <NavLink  className="nav-item mt-lg-0 mt-2" as={HashLink} to='/service'>SERVICES</NavLink>

        <NavLink className="nav-item mt-lg-0 mt-2" as={HashLink} to='/project'>PROJECTS</NavLink>
        <NavLink className="nav-item mt-lg-0 mt-2" as={HashLink} to='/contact'>CONTACT</NavLink>

        <NavLink className="nav-item mt-lg-0 mt-2" as={HashLink} to='/'>LOGIN</NavLink>
        
        
        </Nav>
        
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Navigation;