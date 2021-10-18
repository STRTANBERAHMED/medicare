import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer p-5 mt-5 text-white">
            <h1>Contact Info</h1>
            <div className="d-flex justify-content-center mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <h3>Emergency Cases</h3>
                        <p>45786 2153</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Address</h3>
                        <p>1st Avenue, Karabuk, NY10168, Turkey</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Phone</h3>
                        <p>7546-9123</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Email</h3>
                        <p>contact@medicare.com</p>
                    </div>
                </div>
            </div>
            <p>©2021. Medicare. All rights reserved. Karabuk, Turkey.</p>
        </div>
    );
};

export default Footer;