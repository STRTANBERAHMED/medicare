import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <div>
            <div className="menu-container">
                <Link to="/home" className="header-items">
                    Home
                </Link>
                <Link to="/services" className="header-items">
                    Services
                </Link>
                <Link to="/about" className="header-items">
                    About
                </Link>
                <Link to="/register" className="header-items">
                    Register
                </Link>
                <Link to="/login" className="header-items">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;