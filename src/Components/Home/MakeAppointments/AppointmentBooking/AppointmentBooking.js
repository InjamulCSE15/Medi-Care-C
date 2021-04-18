import React, { useEffect, useState } from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import heart from '../../../../pictures/heart.png';
import teeth from '../../../../pictures/tooth.png';
import eye from '../../../../pictures/loupe.png';
import orthopedics from '../../../../pictures/orthopedics.png';
import blood from '../../../../pictures/blood-bag.png';
import neuron from '../../../../pictures/neurosurgery.png';
import kidney from '../../../../pictures/kidneys.png';
import surgery from '../../../../pictures/surgery-room.png';
const services = [
    {

        id: 1,
        subject: 'Cardiology',
        visitingHour: '8:00 AM - 9:00 PM',
        img: heart,
        price: 500,
        totalSpace: 10
    },
    {

        id: 2,
        subject: 'Dental Care',
        visitingHour: '10:50 AM - 11:30 PM',
        img: teeth,
        price: 100,
        totalSpace: 5
    },
    {

        id: 3,
        subject: 'Eye Care',
        visitingHour: '8:00 AM - 6:00 PM',
        img: eye,
        price: 200,
        totalSpace: 10
    },
    {

        id: 4,
        subject: 'Orthopedics',
        visitingHour: '7:00 AM - 8:30 PM',
        img: orthopedics,
        price: 150,
        totalSpace: 5
    },
    {

        id: 5,
        subject: 'Surgery & OT',
        visitingHour: '24 Hours',
        img: surgery,
        price: 500,
        totalSpace: 10
    },
    {

        id: 6,
        subject: 'Neurologists',
        visitingHour: '11:00 AM - 10:00 PM',
        img: neuron,
        price: 300,
        totalSpace: 10
    },
    {

        id: 7,
        subject: 'Nephrologists',
        visitingHour: '9:00 PM - 6:00 PM',
        img: kidney,
        price: 400,
        totalSpace: 10
    },
    {

        id: 8,
        subject: 'Blood Transformation & Donation',
        visitingHour: '24 Hours',
        img: blood,
        price: 200,
        totalSpace: 10
    }
]



const AppointmentBooking = ({ date }) => {
    // const [services, setServices] = useState([])
    // useEffect( () => {
    //     fetch('https://vast-thicket-09583.herokuapp.com/services')
    //     .then(res => res.json())
    //     .then(data =>console.log(data))
    // }, [])
    return (
        <section id="services" className="mt-5 bg-dark pb-4">
            <div className="text-center mt-3">
                <h1 className="pt-2">Our Services</h1>
                <h3 className="text-center text-brand mt-3 mb-5" style={{color: 'tomato'}}>Available Appointments on {date.toDateString()}</h3>
             
            </div>

            <div className="container row row-cols-md-4 g-3 m-auto">
                {
                    services.map(service => <AppointmentCard service={service} date={date} key={service.id} />)
                }
            </div>
        </section>

    );
};

export default AppointmentBooking;