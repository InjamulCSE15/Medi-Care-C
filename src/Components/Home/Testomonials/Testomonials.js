import React from 'react';
import { faMobileAlt, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import PatientTestomonial from './PatientTestomonial/PatientTestomonial';
import wilson from '../../../pictures/wilson.jpg';
import alinso from '../../../pictures/alinso.jpg';
import ema from '../../../pictures/ema.jpg';
import aliza from '../../../pictures/aliza.jpg';

const patientsData = [
    {
        id: 1,
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson,
        iconFb: faFacebook,
        iconGmail: faGoogle,
        iconCall: faMobileAlt,
    },
    {
        id: 2,
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Alinso Gomez',
        from: 'California',
        img: alinso,
        iconFb: faFacebook,
        iconGmail: faGoogle,
        iconCall: faMobileAlt,
    },
    {
        id: 3,
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: ema,
        iconFb: faFacebook,
        iconGmail: faGoogle,
        iconCall: faMobileAlt,
    },
    {
        id: 4,
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza,
        iconFb: faFacebook,
        iconGmail: faGoogle,
        iconCall: faMobileAlt,
    }
]



const Testomonials = () => {
    return (
        <section className="bg-dark pb-5" id="reviews">
            <div className="text-center pt-4">
                <h2 className=" text-uppercase text-white">Latest Patients Posts</h2>
                <h5 className="text-center text-white mt-3 pb-4">See what our patients says </h5>

            </div>

            <div className="container row row-cols-md-4 g-3 m-auto">
                {
                    patientsData.map(review => <PatientTestomonial review={review} key={review.id} />)
                }
            </div>
        </section>
    );
};

export default Testomonials;