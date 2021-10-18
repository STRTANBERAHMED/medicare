import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import './Departments.css';

const Departments = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('/items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h4>Modern Equipment</h4>
                <h1>Departments</h1>
            </div>
            <div className="item-container">
                {
                    items.map(item =>
                        <Items
                            key={item._id}
                            item={item}
                        ></Items>)
                }
            </div>
        </div>
    );
};

export default Departments;