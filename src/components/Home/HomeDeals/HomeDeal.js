import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './HomeDeal.css'

const HomeDeal = (props) => {
    const { name, Price, city, image } = props.place;
    return (
        <div>
            <Col>
                <Card className="bd-info-card shadow p-3 mb-5 bg-body rounded">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {city}
                        </Card.Text>
                        <p>Price: {Price} $</p>
                    </Card.Body>
                    <Button>Book Now</Button>
                </Card>
            </Col>
        </div>
    );
};

export default HomeDeal;