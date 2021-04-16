import React, { useState } from 'react';
import './Appointment.css';
import AppointmentBooking from '../AppointmentBooking/AppointmentBooking';
import AppointmentCalender from '../AppointmentCalendar/AppointmentCalender';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div className="mt-2 appointment-container pt-1">
            <AppointmentCalender handleDateChange={handleDateChange}/>
            <AppointmentBooking date={selectedDate}/>
        </div>
    );
};

export default Appointment;