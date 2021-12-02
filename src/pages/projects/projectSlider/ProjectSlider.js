import React from 'react';
import '../Projects.css';
import { Carousel } from 'react-bootstrap';

const ProjectSlider = ({projectFind}) => {
    
    
   
    if(projectFind != null){
        console.log(projectFind);
        // var { projectName,catagory}=projectFind;

    }

    let image1,image2,image3;
    if(projectFind?.picture[0]?.img1 !== null){
       image1= projectFind?.picture[0]?.img1;
       image2= projectFind?.picture[1]?.img2;
       image3= projectFind?.picture[2]?.img3;

    }
    
    
    return (
        <Carousel >
        <Carousel.Item interval={500}>
        <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
        height="300px"
        />
        {/* <Carousel.Caption className="caption">
        <h3 className="slide-title">{projectName}</h3>
        <p className="slide-catagory">{catagory}</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img 
        className="d-block w-100" 
        src={image2}
        alt="Second slide"
        height="300px"
        />
        {/* <Carousel.Caption className="caption">
        <h3 className="slide-title">{projectName}</h3>
        <p className="slide-catagory">{catagory}</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
        <img 
        className="d-block w-100 "
        src={image3}
        alt="Third slide"
        height="300px"
        />
        {/* <Carousel.Caption className="caption">
        <h3 className="slide-title">{projectName}</h3>
        <p className="slide-catagory">{catagory}</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        </Carousel>
    );
};

export default ProjectSlider;