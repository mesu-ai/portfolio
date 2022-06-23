
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Col, Container, FloatingLabel, Form, Row, Spinner } from 'react-bootstrap';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const [show, setShow] = useState(false);
    const [isLoading,setLoading] = useState(false);
    
    useEffect(()=>{
        AOS.init({
            
        });
        
    },[]);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
    
        emailjs.sendForm(`service_m3oiybm`, `template_0bptm5s`, form.current, `user_gfR8X5W9oO7kv6P0nolPH`)
          .then((result) => {
              console.log(result.text);
              setShow(true);
          }, (error) => {
              console.log(error.text);
          }).finally(()=>setLoading(false));
               e.target.reset();
      };

    

    return (
        <div style={{backgroundColor:'#f7f7f7',height:'auto',padding:'60px 0'}}>
        <Container className=" justify-content-center align-items-center ">

        {isLoading ? <Spinner className="mt-5" animation="border" variant="primary" />:
        <>

        <div>
        {show && 
        <Alert show={show} variant="success">
            <div className='d-flex justify-content-center align-items-center'>
            <Alert.Heading><i className="bi bi-check-circle-fill text-success"></i> Success !!</Alert.Heading>
            <p className='text-primary ms-3 mb-2 fw-bold'>
            An Email is Sent...
            </p>

            </div>
            
            <hr />
            <div className="d-flex justify-content-end">
            <button className="btn btn-danger" onClick={() => setShow(false)} >
                close
            </button>
            </div>
        </Alert>
        }
        </div>

        <div className="border border-2 border-dark pt-4 pb-5" style={{borderRadius:'12px'}}>
        <h3 className="fw-bold mt-2 mb-5">Contact Me</h3>
    

        <form data-aos="fade-up" className="px-5 " ref={form} onSubmit={sendEmail}>
       
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
        </form>

        </div>
            
        </>
        }
        </Container>       
        </div>
    );
};

export default Contact;