import React from 'react';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Services from '../services/Services';
import DevInfo from './developerinfo/DevInfo';
import HomeBanner from './homebanner/HomeBanner';

const Home = () => {
    return (
        <div>
            
            <HomeBanner/>
            <DevInfo/>
            <About/>
            <Services/>
            <Projects/>
            <Contact/>
            
        </div>
    );
};

export default Home;