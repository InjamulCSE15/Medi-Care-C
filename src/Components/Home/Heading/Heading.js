import React from 'react';
import headDoctor from '../../../pictures/newhdoctor.jpg';
import './Heading.css';

const Heading = () => {
    return (
        <main class="heading-container mt-4 d-flex justify-content-center">
            <div class="container row g-3">
                <div class="col-md-6">
                    <div class="card-body mt-3">
                        <h1 class="text-uppercase mb-3">We care about <br/>your <span style={{color: '#15f702'}}>Health</span> </h1>
                        <h5 class="text-white mb-4">We provide high solution for your health. <br/>Come to us for Best Doctor & Best Care.</h5>
                        <button type="button" class="mt-2 btn btn-outline-light text-uppercase"><a href="#services" className="get-button">Get Appointment</a></button>
                    </div>
                </div>
                <div class="col-md-6">
                    <img className="img-fluid" src={headDoctor} alt="..." />
                </div>
            </div>
        </main>
    );
};

export default Heading;