
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div style={{backgroundColor:'#f7f7f7',minHeight:'100vh',maxHeight:'auto',padding:'20px 0'}}>
        <Container className="flex justify-content-center align-items-center ">
        <div className="border border-2 border-dark pt-4 pb-5">
        <h3 className="fw-bold mt-2 mb-5">Contact Me</h3>
        <Form className="px-4 ">
       
        <Row className="mb-3 text-start row-cols-1 row-cols-md-2 row-cols-lg-2 ">
        <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />

        </Form.Group>

        </Row>
        <Row className="text-start row-cols-1 row-cols-md-2 row-cols-lg-2 ">
        <Form.Group as={Col} className="mb-3" controlId="formGridSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control required placeholder="Subject" />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control placeholder="Phone" />
        </Form.Group>
        </Row>

        <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
        as="textarea"
        required
        placeholder="Leave a comment here"
        style={{ height: '100px' }}
        />
        </FloatingLabel>



        <Button className="btn-outline-dark rounded-pill px-5 py-2 mt-5 " variant="primary" type="submit">
        SEND
        </Button>
        </Form>

        </div>
            
        
        </Container>       
        </div>
    );
};

export default Contact;