import React from 'react';
import '../Projects.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useProjects from '../../../hooks/useProjects';
import ProjectSlider from '../projectSlider/ProjectSlider';
// import LanguageUse from '../languageUse/LanguageUse';
import { HashLink } from 'react-router-hash-link';

const ProjectDetails = () => {

    const [projects] = useProjects();



    const { id } = useParams();
    let selectedProject;

    if (projects == null) {
        // console.log('wait');

    } else {
        selectedProject = projects.find(project => project._id === id);

    }

    let projectFind;
    if (selectedProject == null) {

    } else {
        projectFind = selectedProject;

    }


    if (projectFind?.picture[0]?.img1 == null) {

    } else {

        //    console.log(projectFind?.picture[0]?.img1);

    }

    // console.log(projectFind.projectName);



    return (

        <div >

            <div style={{ minHeight: '100vh', maxHeight: 'auto', backgroundColor: '#f7f7f7' }} className="py-5"  >

                <Container>
                    <Row className="d-flex flex-lg-row flex-column-reverse  row-cols-lg-2 row-cols-1 ">
                        <Col className="text-start mt-lg-0 mt-5 px-lg-2 px-5">

                            <div>
                                <p><i className="bi bi-file-earmark-text display-4 text-info"></i>
                                </p>
                                <p className="fw-bold display-6 text-primary mt-3 mb-0">
                                    {projectFind?.projectName}
                                </p>
                                <p className="fw-bold fs-5 text-danger">
                                    {projectFind?.catagory}
                                </p>

                                <p className="pe-lg-5" style={{ textAlign: 'justify', fontSize: '18px' }}>

                                    {projectFind?.details}</p>

                            </div>


                            <div>
                                <p className="fw-bold fs-4 text-info">Tecnology Use:</p>

                                <p className="pe-lg-5" style={{ textAlign: 'justify' }}>
                                    <strong className="">
                                        {projectFind?.tecnology}
                                    </strong>

                                </p>
                            </div>

                            <div>
                                <a href={projectFind?.liveSite} target="_blank" className='btn btn-danger mt-3 py-2 px-4 fw-bold shadow mb-2' style={{borderRadius:'12px'}} rel="noopener noreferrer">Site Visit<i className="bi bi-arrow-right-circle-fill ms-2"></i></a>

                                <a href={projectFind?.frontEndCode} target="_blank" className='btn btn-success mt-3 py-2 px-4 fw-bold shadow mb-2 ms-3' style={{borderRadius:'12px'}} rel="noopener noreferrer">Github <i className="bi bi-github ms-2"></i></a>
                            </div>

                        </Col>


                        <Col className='shadow-lg p-3 mb-5 my-auto py-5 px-3' style={{ borderRadius: '12px 50px 12px 0' }} >

                            <div className='row  py-2'>
                                <div className='col'>
                                    <img className='w-100 h-100' style={{ borderRadius: '12px' }} src={projectFind?.picture[1]?.img2} alt="" />
                                </div>
                                <div className='col'>
                                    <img className='w-100 h-100' style={{ borderRadius: '12px' }} src={projectFind?.picture[2]?.img3} alt="" />

                                </div>

                            </div>
                            <div className='row my-2'>
                                <div>
                                    <img className='w-100 h-100' style={{ borderRadius: '12px' }} src={projectFind?.cover_img} alt="" />

                                </div>

                            </div>





                            {/* <Card className='rounded-3'>
                <h6 className='bg-warning p-2'>GitHub Languages Use Details</h6>
                <div className='px-lg-2 px-5'>
                    <LanguageUse projectFind={projectFind}></LanguageUse>
                </div>
            </Card> */}


                        </Col>

                    </Row>
                </Container>
            </div>



            <ProjectSlider projectFind={projectFind} ></ProjectSlider>


            <div className="py-4 d-flex flex-lg-row flex-md-row flex-column justify-content-center bg-dark">

                <a className="btn fw-bold btn-outline-dark custom-btn px-3 mx-3 rounded-pill" href={projectFind?.liveSite} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-globe me-2"></i>Live Site</a>

                <a className="btn fw-bold  btn-outline-dark custom-btn px-3 mx-3 my-3 my-lg-0 my-md-0 rounded-pill" as={HashLink} href={projectFind?.frontEndCode} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github me-2"></i> Front-End Code</a>

                {projectFind?.backEndCode &&
                    <a className="btn fw-bold btn-outline-dark custom-btn px-3 mx-3 rounded-pill" href={projectFind?.backEndCode} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github me-2"></i> Back-End Code</a>

                }
            </div>





        </div>
    );
};

export default ProjectDetails;