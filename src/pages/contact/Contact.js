
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { Alert, Col, Container, FloatingLabel, Form, Row, Spinner } from 'react-bootstrap';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {

    const [show, setShow] = useState(false);
    const [isLoading,setLoading] = useState(false);
    
    useEffect(()=>{
        AOS.init({
            
        });
        
    },[]);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_m3oiybm', 'template_0bptm5s', e.target, 'user_gfR8X5W9oO7kv6P0nolPH')
          .then((result) => {
              console.log(result.text);
              setShow(true);
              
          }, (error) => {
              console.log(error.text);
          }).finally(()=>setLoading(false));
          e.target.reset();
      };



    return (
        <div style={{backgroundColor:'#f7f7f7',minHeight:'100vh',maxHeight:'auto',padding:'20px 0'}}>
        <Container className=" justify-content-center align-items-center ">

        {isLoading ? <Spinner className="mt-5" animation="border" variant="primary" />:
        <>

        <div>
        {show && 
        <Alert show={show} variant="success">
            <Alert.Heading>Success !!</Alert.Heading>
            <p>
            An Email is Sent !
            </p>
            <hr />
            <div className="d-flex justify-content-end">
            <button className="btn btn-danger" onClick={() => setShow(false)} >
                close
            </button>
            </div>
        </Alert>
        }
        </div>

        <div className="border border-2 border-dark pt-4 pb-5">
        <h3 className="fw-bold mt-2 mb-5">Contact Me</h3>
        <Form data-aos="fade-up" className="px-5 " onSubmit={sendEmail}>
       
        <Row className="mb-3 text-start row-cols-1 row-cols-md-2 row-cols-lg-2 ">
        <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" required type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" required type="email" placeholder="Enter email" />

        </Form.Group>

        </Row>
        <Row className="text-start row-cols-1 row-cols-md-2 row-cols-lg-2 ">
        <Form.Group as={Col} className="mb-3" controlId="formGridSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control name="subject" required placeholder="Subject" />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control name="phone" placeholder="Phone" />
        </Form.Group>
        </Row>

        <FloatingLabel controlId="floatingTextarea2" label="Your Message">
        <Form.Control
        as="textarea"
        required
        name="message"
        placeholder="Leave a message here"
        style={{ height: '100px' }}
        />
        </FloatingLabel>



        <Button className="btn-outline-dark rounded-pill px-5 py-2 mt-5 " variant="primary" type="submit">
        SEND
        </Button>
        </Form>

        </div>
            
        </>
        }
        </Container>       
        </div>
    );
};

export default Contact;