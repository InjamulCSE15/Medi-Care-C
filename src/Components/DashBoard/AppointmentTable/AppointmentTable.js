import React from 'react';

const AppointmentTable = ({appointments}) => {
    return (
        <table className="table mt-3">
                <thead className="table-dark">
                    <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className="text-white">
                    {
                        appointments.map((app, index) =>
                            <tr key={app._id}>
                                <td>{index+1}</td>
                                <td>{app.name}</td>
                                <td>{app.date}</td>
                                <td>Pending</td>
                            </tr> 
                        ) 
                    }
                </tbody>
                <tfoot>
                    
                </tfoot>
            </table>
    );
};

export default AppointmentTable;