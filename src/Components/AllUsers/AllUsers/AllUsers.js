import React, { useEffect, useState } from 'react';
import AllUserDataTable from '../../AllUserDataTable/AllUserDataTable';
import SideBar from '../../DashBoard/SideBar/SideBar';

const AllUsers = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/userappointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="container-fluid row " >
            <SideBar/>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h3 className="text-brand">All users appointments</h3>
                <AllUserDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default AllUsers;