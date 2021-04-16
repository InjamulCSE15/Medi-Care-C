import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
    return (
        <section className="col">
            <div class="card h-100">
                <div class="m-auto pt-3">
                    <img src={doctor.pic} className="img-fluid" style={{ borderRadius: '50%' }} alt="" />
                </div>
                <div>
                    <div class="text-center pt-5">
                        <h4>{doctor.name}</h4>
                        <h4 class="text-justify pb-2">{doctor.specialist}</h4>
                    </div>
                    <div className="d-flex justify-content-center ms-2 pt-5">
                        <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com" target="_blank"><FontAwesomeIcon className="icon" icon={doctor.iconFb} /></a></li>
                        <li className="list-inline-item"><a href="//gmail.com" target="_blank"><FontAwesomeIcon className="icon" icon={doctor.iconGmail} /></a></li>
                        <li className="list-inline-item"><a href="//youtube.com" target="_blank"><FontAwesomeIcon className="icon" icon={doctor.iconYT} /></a></li>
                        <li className="list-inline-item"><a href="https://www.whatsapp.com" target="_blank"><FontAwesomeIcon className="icon" icon={doctor.iconCall}/></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorCard;