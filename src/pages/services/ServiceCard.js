import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceCard = ({service}) => {
    const {icon,serviceName,sortDetails}= service;
    return (
        <Col>
            <Card className="h-100 p-3 shadow-lg ">
                <Card.Img  variant="top" src={icon}  height="100" />
                <Card.Body>
                <Card.Title className="text-capitalize fw-bold">{serviceName}</Card.Title>
                <Card.Text style={{textAlign:'justify'}} className="">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCard;