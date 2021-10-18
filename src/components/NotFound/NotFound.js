import React from 'react';
import { NavLink } from 'react-router-dom';
import notfound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <NavLink to="/"><button className="btn btn-warning">Go Back</button></NavLink>
        </div>
    );
};

export default NotFound;