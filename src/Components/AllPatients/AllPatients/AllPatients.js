import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AppointmentDataTable from '../../Dashboard/AppointmentDataTable/AppointmentDataTable';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 1, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <div className="text-center justify-content-center">
                  <AppointmentDataTable appointments={appointments}/>
                </div>
                
            </div>
        </div>
    );
};

export default AllPatients;