import React from 'react';
import Appbar from '../Appbar/Appbar';
import Banner from '../Banner/Banner';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Appbar></Appbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;