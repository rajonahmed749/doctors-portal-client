import React from 'react';
import BussinessInfo from '../BussinessInfo/BussinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from "../../Shared/Navbar/Navbar"
import "./Header.css"

const Header = () => {
    return (
        <div className="header-container">
           <Navbar></Navbar>   
           <HeaderMain/>   
           <BussinessInfo></BussinessInfo>      
        </div>
    );
};

export default Header;