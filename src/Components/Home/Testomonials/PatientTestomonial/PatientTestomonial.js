import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PatientTestomonial.css';

const PatientTestomonial = ({review}) => {
    return (
        <section className="col">
            <div class="card h-100">
                <div class="m-auto pt-3">
                    <img src={review.img} className="img-fluid" style={{ borderRadius: '50%', height: '100px'}} alt="" />
                </div>
                <div>
                    <div class="text-center pt-5">
                        <h4>{review.name}</h4>
                        <h6 class="text-justify pb-2">{review.quote}</h6>
                        <h6 class="text-justify pb-2"><span style={{fontWeight: 'bold'}}>From: </span><span style={{color: 'tomato'}}>{review.from}</span></h6>
                    </div>
                    <div className="d-flex justify-content-center ms-2 pt-2">
                        <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com" target="_blank"><FontAwesomeIcon className="icon" icon={review.iconFb} /></a></li>
                        <li className="list-inline-item"><a href="//gmail.com" target="_blank"><FontAwesomeIcon className="icon" icon={review.iconGmail} /></a></li>
                        <li className="list-inline-item"><a href="https://www.whatsapp.com" target="_blank"><FontAwesomeIcon className="icon" icon={review.iconCall}/></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PatientTestomonial;