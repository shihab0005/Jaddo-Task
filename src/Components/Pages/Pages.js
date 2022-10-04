import React from 'react';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import Destinations from '../Destinations/Destinations';
import EasyFast from '../EasyFast/EasyFast';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Partner from '../Partner/Partner';
import Sliders from '../Slider/Sliders';
import Testimonial from '../Testimonial/Testimonial';



const Pages = () => {
    return (
        <div>
            <Hero />
            <Category />
            <Destinations />


            <EasyFast />
            <Testimonial />
            {/* <Sliders /> */}
            <Partner />
            <Contact />
            <Footer />
        </div>
    );
};

export default Pages;