import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AboutInfoCard.css';


const AboutInfoCard = ({ info }) => {
    return (
        <div className="col">
            <div class="card h-100 card-container mb-5">
                <div class="row align-items-center">
                    <div class="col-md-2 offset-md-1">
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{info.title}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutInfoCard;