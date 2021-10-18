import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import './ITems.css';

const Items = (props) => {
    const { name } = props.item || {}

    // font awesome
    const heartbeat = <FontAwesomeIcon icon={faHeartbeat} />

    return (
        <div className="item">
            <div>
                <h2>{heartbeat}</h2>
                <h1>{name}</h1>
                <button>visit</button>
            </div>
        </div>
    );
};

export default Items;