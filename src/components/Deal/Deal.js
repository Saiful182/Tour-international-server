
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Deal.css';

const Deal = (props) => {
    console.log(props.place);
    const { name, Price, days, city, image } = props.place;

    return (
        <div>
            <Col>
                <Card className="bd-places-card">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {city}
                        </Card.Text>
                        <p>Price: {Price} $</p>
                        <p>Days: {days} </p>
                    </Card.Body>
                    <Button>Book Now</Button>
                </Card>
            </Col>


        </div>
    );
};

export default Deal;