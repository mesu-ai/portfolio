import React from 'react';
import { Card, Col } from 'react-bootstrap';

const DevCard = ({info}) => {


    return (
        <Col>
        <Card data-aos="zoom-in-up" className="h-100 p-3 shadow-lg " style={{borderRadius:'12px'}}>
            <Card.Img  variant="top" src={info.infoImg}  height="100" />
            <Card.Body>
            <Card.Title className="text-capitalize fw-bold">{info.itemName}</Card.Title>
            <Card.Text style={{textAlign:'justify'}} className="text-center text-primary display-4">
                {info.serviceInfo}
            </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default DevCard;