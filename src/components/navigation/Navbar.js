import React from 'react';
import './Nabbar.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { HashLink} from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="" style={{backgroundColor:'rgba(240, 248, 255, 0.762)'}} variant="light" sticky="top">
        <Container>
        <Navbar.Brand href="#home">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto ">
       
        <NavLink  className="nav-item mt-lg-0 mt-2" as={HashLink} to='/home'>HOME</NavLink>
        <NavLink  className="nav-item mt-lg-0 mt-2" as={HashLink} to='/service'>SERVICES</NavLink>

        <NavLink className="nav-item mt-lg-0 mt-2" as={HashLink} to='/project'>PROJECTS</NavLink>

        <NavLink className="nav-item mt-lg-0 mt-2" as={HashLink} to='/blog'>BLOG</NavLink>

        <NavLink className="nav-item mt-lg-0 mt-2" as={HashLink} to='/contact'>CONTACT</NavLink>

        <NavLink className="nav-item mt-lg-0 mt-2" as={HashLink} to='/login'>LOGIN</NavLink>
        
        
        </Nav>
        
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Navigation;