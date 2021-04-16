import React from 'react';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AboutInfoCard from '../AboutInfoCard/AboutInfoCard';

const infoData = [
    {
        title: '28 Jackson BLVD STE 1050, Chicago',
        
        icon: faMapMarker
    },
    {
        title: 'contactus@medicare.com',
        
        icon: faEnvelope
    },
    {
        title: '+879 457 3534 / +472 829 4245',
      
        icon: faPhone
    }
]

const AboutInfo = () => {
    return (
        <section className="d-flex justify-content-center">
        <div className=" row row-cols-md-3 g-4 m-auto">
            {
                infoData.map(info => <AboutInfoCard info={info} key={info.title} />)
            }
        </div>
    </section>
    );
};

export default AboutInfo;