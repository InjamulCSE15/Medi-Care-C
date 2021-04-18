
import React from 'react';
import AppointmentTable from '../AppointmentTable/AppointmentTable';

const AppointmentsByDate = ({appointments}) => {
    
    return (
        <div className="mt-3">
            <h3 style={{color: 'tomato'}}>Appointments: {appointments.length}</h3>
            <AppointmentTable appointments={appointments}/>
        </div>
    );
};

export default AppointmentsByDate;