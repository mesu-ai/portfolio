import React from 'react';
import About from '../about/About';
import Services from '../services/Services';
import HomeBanner from './homebanner/HomeBanner';

const Home = () => {
    return (
        <div>
            
            <HomeBanner/>
            <About/>
            <Services/>
            
        </div>
    );
};

export default Home;