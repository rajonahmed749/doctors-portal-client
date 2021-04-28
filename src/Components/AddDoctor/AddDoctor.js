import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5">
                <h5 className="text-brand">Add a doctor</h5>
            </div>
        </section>
    );
};

export default AddDoctor;