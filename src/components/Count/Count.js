import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faHeart, faUser, faAward } from '@fortawesome/free-solid-svg-icons';
import './Count.css'

const Count = () => {

    // font awesome
    const hospital = <FontAwesomeIcon icon={faHospital} />
    const patients = <FontAwesomeIcon icon={faHeart} />
    const staff = <FontAwesomeIcon icon={faUser} />
    const award = <FontAwesomeIcon icon={faAward} />

    return (
        <div className="container">
            <div className="count row p-4 mt-5">
                <div className="list col-md-3 text-center">
                    <h2>{hospital}</h2>
                    <h1>164</h1>
                    <p>Hospital Rooms</p>
                </div>
                <div className="list col-md-3 text-center">
                    <h2>{staff}</h2>
                    <h1>564</h1>
                    <p>Qualified Staff</p>
                </div>
                <div className="list col-md-3 text-center">
                    <h2>{patients}</h2>
                    <h1>9542</h1>
                    <p>Satisfied Patients</p>
                </div>
                <div className="list col-md-3 text-center">
                    <h2>{award}</h2>
                    <h1>741</h1>
                    <p>Doctors Medals</p>
                </div>
            </div>
        </div>
    );
};

export default Count;