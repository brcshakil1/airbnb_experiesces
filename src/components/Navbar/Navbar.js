import React from 'react';
import './Navbar.css';
import logo from '../.././images/logo.png'

const Navbar = () => {
    return (
        <nav className='navbar section-margin'>
            <img src={logo} alt="logo" />
        </nav>
    );
};

export default Navbar;