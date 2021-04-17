import React, { useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import SideBar from '../SideBar/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const styleContainer = {
    backgroundColor: "#36f0e7",
    height: "100%"
}
const DashBoard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <section>
            <div style={styleContainer} className="container-fluid row">
                <div className="col-md-2">
                    <SideBar />
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate />
                </div>
            </div>
        </section>
    );
};

export default DashBoard;