import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DevCard = ({info}) => {
    useEffect(()=>{
        AOS.init({
            
        });
        
    },[]);


    return (
        <Col>
        <Card data-aos="zoom-in-up" className="h-100 p-3 shadow-lg " style={{borderRadius:'12px',backgroundColor:'white'}}>
            <Card.Img  variant="top" src={info.img}  height="45" />
            <Card.Body>
            <Card.Title className="text-capitalize fw-bold">{info.title}</Card.Title>
            <Card.Text style={{textAlign:'justify',width:''}} className=" fs-4 fw-bold text-primary d-flex justify-content-center text-center mt-4">
                
                {info.serviceInfo && 
                <p className='border border-secondary rounded-circle p-4 text-white mb-0' style={{background:'#009444',width:'42%'}}> 
                 {info.serviceInfo}
                </p>
                }
                

                {info.icons && 
                <div>
                  <div>
                    {info.icons.slice(0,3).map(icon=>
                    <img src={icon.icon1} alt='' width={55}/>
                    )} 

                  </div>
                  <div>
                    {info.icons.slice(3,5).map(icon=>
                    <img src={icon.icon1} alt='' width={60}/>
                    )}

                  </div>
                </div>
                
                }
                
               
            </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default DevCard;