import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './stuff.css';

const Stuff = (props) => {
    const { name, Post, img } = props.stuff;

    return (

        <Col>
            <Card className="stuff-container-card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name:{name}</Card.Title>
                    <Card.Text>
                        post:{Post}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Stuff;