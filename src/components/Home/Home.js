import React from 'react';
import Banner from '../Banner/Banner';
import Count from '../Count/Count';
import Departments from '../Departments/Departments';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Departments></Departments>
            <Count></Count>
        </div>
    );
};

export default Home;