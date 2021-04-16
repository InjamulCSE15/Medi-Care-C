import React from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import doctorApp from '../../../../pictures/young-asian-female-doctor-with-laptop.jpg';

const AppointmentCalender = ({handleDateChange}) => {
    return (

        <div class=" container mt-5">
            <h2 className="text-center">Appointments here</h2>
            <h6 className="text-center mb-3">...for your better treatment.</h6>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card-body">
                        <h3 class="card-title">Make an Appointment</h3>
                        <p class="card-text text-justify">Find your doctor easily with a minimum of effort. We've kept everything organized for you. Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest. Visit the doctor, take the service based on your appointment. Get back to good health and happiness.</p>

                    </div>
                </div>
                <div class="col-md-4">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div class="col-md-4">
                    <div class="card-body">
                        <img className="img-fluid" src={doctorApp} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AppointmentCalender;