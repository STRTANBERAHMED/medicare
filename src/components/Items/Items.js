import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import './ITems.css';
import { Card, Button } from 'react-bootstrap';

const Items = (props) => {
    const { name } = props.item || {}

    // font awesome
    const heartbeat = <FontAwesomeIcon icon={faHeartbeat} />

    return (
        <div className="col-md-4 item">
            <div className="p-2">
                <Card style={{ width: '18rem' }}>
                    <h2>{heartbeat}</h2>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Button
                            variant="dark">visit</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Items;