import React from 'react';
import { faMobileAlt, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';
import DoctorCard from '../DoctorCard/DoctorCard';
import tania from '../../../../pictures/tania.jpg';
import afsarul from '../../../../pictures/afsar (2).jpg';
import abdurrahim from '../../../../pictures/abdurkarim (2).jpg';
import abdurkarim from '../../../../pictures/abdurkarim (2).jpg';



const doctorsData = [
    {
        id: 1,
        name: 'Dr. Tania Rahman',
        specialist: 'MBBS, M.D in Medicine',
        pic: tania,
        iconFb: faFacebook,
        iconGmail: faGoogle,
        iconYT: faYoutube,
        iconCall: faMobileAlt,
    },
    {
        id: 2,
        name: 'Dr. Afsarul Amin',
        specialist: 'Neurologist',
        pic: afsarul,
        iconFb: faFacebook,
        iconGmail: faGoogle,
        iconYT: faYoutube,
        iconCall: faMobileAlt,
    },
    {
        id: 3,
        name: 'Dr. Abdur Rahman',
        specialist: 'Orthodontist',
        pic: abdurrahim,
        iconFb: faFacebook,
        iconGmail: faGoogle,
        iconYT: faYoutube,
        iconCall: faMobileAlt,
    },
    {
        id: 4,
        name: 'Dr. Abdur Karim',
        specialist: 'Nephrologist',
        pic: abdurkarim,
        iconFb: faFacebook,
        iconGmail: faGoogle,
        iconYT: faYoutube,
        iconCall: faMobileAlt,
    }
]

const Doctors = () => {
    return (
        <section className="">
            <div className="text-center pt-4">
                <h1 className=" text-uppercase">Specialist Doctors</h1>
                <h3 className="text-center text-brand mt-3" style={{color: 'black'}}>Meet our medicare team</h3>
             
            </div>

            <div className="container row row-cols-md-4 g-3 m-auto">
                {
                    doctorsData.map(doctor => <DoctorCard doctor={doctor}  key={doctor.id} />)
                }
            </div>
        </section>
    );
};

export default Doctors;