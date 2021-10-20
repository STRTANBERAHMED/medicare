import React from 'react';
import Count from '../Count/Count';
import Departments from '../Departments/Departments';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Departments></Departments>
            <Count></Count>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;