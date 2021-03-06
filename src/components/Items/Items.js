import React from 'react';
import './ITems.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Items = (props) => {
    const { name, picture, about } = props.item || {}


    return (
        <div className="col-md-4 item">
            <div className="p-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>{about}</p>
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