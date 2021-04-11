import React from 'react';
import chair from "../../../images/chiar.png"
import "./HeaderMain.css"

const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:"40485B"}}>Your New <br/> Smile Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam, quidem vel ullam perspiciatis in?</p>
                <button className="btn button">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;