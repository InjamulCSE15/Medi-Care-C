import React from 'react';
import AboutInfo from '../AboutInfo/AboutInfo';
import AboutMain from '../AboutMain/AboutMain';
import './AboutUs.css';



const AboutUs = () => {
    return (
        <div className="about-container pb-5">
        <AboutMain/>
        <AboutInfo/>
        </div>
    );
};

export default AboutUs;