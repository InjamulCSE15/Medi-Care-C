import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import BookForm from '../BookForm/BookForm';
import './AppointmentCard.css';

const AppointmentCard = ({ service, date }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);



    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        // if (!loggedInUser) {
        //     setIsOpen(true);
        // }
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }



    return (
        <div className="col">
            <div class="card container h-100 card-design">
                <div class="text-center m-auto p-5">
                    
                    <img src={service.img} class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                    <h3 class="text-justify mb-2">{service.subject}</h3>
                    <h5 class="text-justify">{service.time}</h5>
                    <h4 class="text-primary">Booking Cost: $ {service.price}</h4>
                    <h6 className="text-danger">Available Bookings: {service.totalSpace}</h6>
                    {/* <Link to={`/myappointment/${booking.subject}`}><button className="btn btn-outline-dark mt-3 text-uppercase">Get Service</button></Link> */}
                    <button onClick={openModal} className="btn btn-outline-dark mt-3 text-uppercase">Get Service</button>
                    <BookForm modalIsOpen={modalIsOpen} closeModal={closeModal} bookingOn={service.subject} date={date} />
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;