import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Navbar.css';


const Navbar = () => {
    const { user } = useFirebase();
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
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default Navbar;