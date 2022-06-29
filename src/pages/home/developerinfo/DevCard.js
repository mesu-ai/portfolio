import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DevCard = ({info}) => {
    useEffect(()=>{
        AOS.init({
            
        });
        
    },[]);


    return (
        <Col>
        <Card data-aos="zoom-in-up" style={{borderRadius:'12px',backgroundColor:'white'}} className={`h-100 p-3 shadow-lg ${info.id===2 ? 'bg-light' : ''}`} >
            <Card.Img  variant="top" src={info.img}  height="45" />
            <Card.Body>
            <Card.Title className="text-capitalize fw-bold">{info.title}</Card.Title>
            <div style={{textAlign:'justify',width:''}} className=" fs-4 fw-bold text-primary d-flex justify-content-center text-center mt-4">
                
                {info.serviceInfo && 
                <p className='border border-secondary rounded-circle p-4 text-white mb-0' style={{background:'#009444',width:'42%'}}> 
                <CountUp duration={1} end={info?.serviceInfo} />+
                 
                </p>
                }
                

                {info.icons && 
                <div>
                  <div>
                    {info.icons.slice(0,3).map((icon,index)=>
                    <img className='rounded-circle shadow mx-1 p-1 bg-white' key={index} src={icon.icon1} alt='' width={55} height={55}/>
                    )} 

                  </div>
                  <div>
                    {info.icons.slice(3,5).map((icon,index)=>
                    <img className='rounded-circle shadow mx-1 p-1 bg-white' key={index} src={icon.icon1} alt='' width={60} height={60}/>
                    )}

                  </div>
                </div>
                
                }
                
               
            </div>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default DevCard;