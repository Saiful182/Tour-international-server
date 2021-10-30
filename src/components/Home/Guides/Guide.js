import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Guide.css';

const Guide = (props) => {
    const { name, img, completed_tour, review } = props.guide;
    return (

        <Col>
            <Card className="guide-card shadow p-3 mb-5 bg-body rounded">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        Complited Tour: {completed_tour}
                    </Card.Text>
                    <p>Ratting: {review}</p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Guide;