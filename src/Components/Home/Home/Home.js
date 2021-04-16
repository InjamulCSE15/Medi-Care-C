import React from 'react';
import Specialist from '../Specialist/Specialist/Specialist';
import AboutUs from '../../AboutUs/AboutUs/AboutUs';
import Header from '../Header/Header';
import Appointment from '../MakeAppointments/Appointment/Appointment';
import SpecialMediCare from '../SpecialMediCare/SpecialMediCare';
import Testomonials from '../Testomonials/Testomonials';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <SpecialMediCare/>
            <AboutUs/>
            <Appointment/>
            <Specialist/>
            <Testomonials/>
            <Footer/>
        </div>
    );
};

export default Home;