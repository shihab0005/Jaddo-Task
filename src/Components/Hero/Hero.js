import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Nav from '../Nav/Nav';
import './hero.css';

const Hero = () => {
    return (
        <div className=' hero_section'>
            <div className="round1"></div>
            {/* <div className="round2"></div> */}
            <Nav />
            <HeroSection />

        </div>
    );
};

export default Hero;