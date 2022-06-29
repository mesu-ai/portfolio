import React from "react";
import { useTransition } from "react";
import { useState } from "react";
import {Button, Container, Row} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import useProjects from "../../hooks/useProjects";
import ProjectCard from "./projectCard/ProjectCard";
import ProjectFilter from "./projectFilter/ProjectFilter";


const Projects = () => {
  const [projects]=useProjects();
  const [selectProjects,setSelectProjects]=useState([]);
  const [isPending,startTransition] =useTransition();

  const location=useLocation();

  const handleProjectFilter=(event)=>{
   
    if(event !== 'all'){
        const filterProject=projects.filter(project=>project?.catagory?.toLowerCase().includes(event.toLowerCase()));
        
        startTransition(()=>{
                setSelectProjects(filterProject);
    
            });

    }else{

        startTransition(()=>{
            setSelectProjects(projects);

        });
    }

    }
  


    return (
        <div  style={{backgroundColor:'',height:'auto' }} className="my-4 py-5">
            <Container>
            <h3 className="fw-bold">My Projects</h3>
            <div className="my-5">
             {/* <p className="text-start fs-5" >I have worked on many projects. 
             <span className="fw-bold" style={{color:'tomato'}}> See some of my specific work.</span>
             
              </p> */}
              <ProjectFilter handleProjectFilter={handleProjectFilter}/>
            <hr />

            {isPending && 
            <h3>Loading...</h3>
            }

            <Row xs={1} md={2} lg={3} className="g-4">
                
                { location.pathname==='/' || location.pathname==='/home' ? 
                   selectProjects?.length ? 
                        selectProjects.slice(0,3).map(project=><ProjectCard key={Math.random()} project={project}></ProjectCard>) 

                        :
                        projects?.slice(0,3).map(project=><ProjectCard key={Math.random()} project={project}></ProjectCard>)

                   :
                   
                    selectProjects?.length ?
                        selectProjects.map(project=><ProjectCard key={Math.random()} project={project}></ProjectCard>)

                        : 
                        projects.map(project=><ProjectCard key={Math.random()} project={project}></ProjectCard>)
                 
                }
            </Row>
            <hr />
            <div className="text-start">

            {location.pathname==='/home' || location.pathname==='/' ? 

            <Link to='/project'>
            <Button className="MoreProjectBtn btn-outline-warning">Click For More<i className="bi bi-arrow-right ms-1 fw-bold"></i></Button>
            </Link>: <></>

            }

            </div>

            </div>
            </Container>
            
        </div>
    );
};

export default Projects;