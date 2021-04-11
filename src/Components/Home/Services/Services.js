import React from 'react';
import fluoride from "../../../images/fluoride.png"
import cavity from "../../../images/cavity.png"
import whitening from "../../../images/whitenning.png"
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const servicesData = [
        {
            name: "Fluoride Treatment",
            img: fluoride
        },
        {
            name: "Cavity Filling ",
            img: cavity
        },
        {
            name: "Teath Whitening",
            img: whitening
        }
    ]
    return (
        <section className="services-container">
            <div className="text-center">
                <h5 style={{color:"#1CC7C1"}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>   
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
             </div>
        </section>
    );
};

export default Services;