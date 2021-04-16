import React from 'react';
import icon from '../../../pictures/favicon-32x32.png';


const NavBar = () => {
    return (
        <nav class="container navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home"><img src={icon} alt="" srcset=""/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto text-style">
                        <a class="nav-link active ms-4" aria-current="page" href="/home">Home</a>
                        <a class="nav-link ms-4" href="#about">About Us</a>
                        <a class="nav-link ms-4" href="/services">Services</a>
                        <a class="nav-link ms-4" href="/reviews">Reviews</a>
                        <a class="nav-link ms-4" href="/appointments">Appointments</a>
                        <a class="nav-link ms-4" href="/contact">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;