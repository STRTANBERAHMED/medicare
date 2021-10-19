import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import './ITems.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Items = (props) => {
    const { name, picture, about } = props.item || {}

    // font awesome
    const heartbeat = <FontAwesomeIcon icon={faHeartbeat} />

    return (
        <div className="col-md-4 item">
            <div className="p-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>price: ${about}</p>
                        </Card.Text>
                        <Link to='/services'><Button
                            variant="dark">visit</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Items;