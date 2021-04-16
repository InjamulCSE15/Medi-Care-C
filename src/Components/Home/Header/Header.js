import React from 'react';
import Heading from '../Heading/Heading';
import NavBar from '../NavBar/NavBar';
import './Header.css';


const Header = () => {
    return (
        <div className="header-container" id="top">
            <NavBar/>
            <Heading/>
        </div>
    );
};

export default Header;