import React from 'react';

const AllUserDataTable = ({ appointments }) => {
    return (
        <table className="table mt-3">
            <thead className="table-dark">
                <tr>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Weight</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointment, index) =>

                        <tr>
                            <td>{index + 1}</td>
                            <td>{appointment.name}</td>
                            <td>{appointment.gender}</td>
                            <td>{appointment.age}</td>
                            <td>{appointment.weight}KG</td>
                            <td>{appointment.phone}</td>
                            <td>{appointment.email}</td>
                        </tr>

                    )
                }
            </tbody>
            <tfoot>
                <td colSpan='5'><strong>Total Appointments: {appointments.length}</strong></td>
            </tfoot>
        </table>
    );
};

export default AllUserDataTable;