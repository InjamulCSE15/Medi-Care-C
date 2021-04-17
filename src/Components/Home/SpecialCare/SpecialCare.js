import React from 'react';
import './SpecialCare.css'

const SpecialCare = ({ special }) => {
    return (
        <div className="col care-card">
            <div class="container card h-100 m-auto">
                <div class="text-center m-auto p-5">
                <img src={special.img} class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                    <h4 class="text-justify">{special.name}</h4>
                    <p class="text-justify">{special.describe}</p>
                </div>
            </div>
        </div>
    );
};

export default SpecialCare;