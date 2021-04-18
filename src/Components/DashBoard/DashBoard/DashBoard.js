import React, { useEffect, useState } from 'react';
import './DashBoard.css';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import SideBar from '../SideBar/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NavBar from '../../Home/NavBar/NavBar';
import Footer from '../../Footer/Footer';


const DashBoard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])

    const handleDateChange = date => {
        setSelectedDate(date);

    }

    useEffect(() => {
        fetch('https://vast-thicket-09583.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })
    }, [selectedDate])


    return (
        <section class="w-100">
            <div class="d-flex">

            <SideBar />
               <div class="container-fluid row d-flex justify-content-between">
                <div class=" col-md-4 pt-4">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div class="col-md-8">
                    <AppointmentsByDate appointments={appointments} />
                </div>
            </div>
            </div>

            <Footer />
        </section>















    );
};

export default DashBoard;