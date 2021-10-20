import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('/doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div className="container my-3">
            <div className="text-center">
                <h1>Our Doctors</h1>
            </div>
            <div className="row">
                {
                    doctors.map(doctor =>
                        <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;