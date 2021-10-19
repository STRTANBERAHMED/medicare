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
                        <p>The primary goal of our practice is to provide a full range of primary care services to our patients and to do so in a caring and compassionate manner using the latest advances in medical technology and knowledge. As primary care physicians, we are trained to carefully assess a patient’s needs and, working with our patients, determine the most appropriate plan of care or treatment.</p>
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