import React, { useState } from 'react';
import BookForm from '../BookForm/BookForm';
import './AppointmentCard.css';

const AppointmentCard = ({ booking, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className="col">
            <div class="card h-100 card-design">
                <div class="text-center m-auto p-5">
                    <img src={booking.img} class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-center">
                    <h3 class="text-justify mb-2">{booking.subject}</h3>
                    <h5 class="text-justify">{booking.visitingHour}</h5>
                    <h6 className="text-danger">Available Bookings: {booking.totalSpace}</h6>
                    <button onClick={openModal} className="btn btn-outline-dark mt-3 text-uppercase">Get Service</button>
                    <BookForm modalIsOpen={modalIsOpen} closeModal={closeModal} bookingOn={booking.subject} date={date} />
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;