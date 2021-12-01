import React from 'react';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Services from '../services/Services';
import HomeBanner from './homebanner/HomeBanner';

const Home = () => {
    return (
        <div>
            
            <HomeBanner/>
            <About/>
            <Services/>
            <Projects/>
            <Contact/>
            
        </div>
    );
};

export default Home;