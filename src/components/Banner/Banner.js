import React from 'react';
import image from '../../images/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container">
            <div className="d-flex">
                <div className="p-5 row">
                    <div className="col-md-7 text-white text-start text">
                        <h3>Here at "MEDICARE" We Offer</h3>
                        <h1>World Class Medical Treatment</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque enim, iaculis sit amet lobortis a, laoreet in magna. Integer ultrices volutpat elit non tempus. Mauris placerat, lectus in lacinia pretium, quam lectus porttitor sapien.</p>
                    </div>
                    <div className="col-md-5">
                        <img style={{ width: '25%' }} src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;