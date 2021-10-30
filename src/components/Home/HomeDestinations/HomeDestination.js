import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeDestination.css'

const HomeDestination = (props) => {
    const { name, country, _id, description, days, img1, img2, img3, Price, places, review } = props.pakage;

    return (
        <Col>

            <Card className="destination-card shadow p-3 mb-5 bg-body rounded">
                <Card.Img className="destination-card-img" variant="top" src={img3} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>Country: {country}</h6>
                    <h6>Places will be cover: {places}</h6>
                    <h6>Pakage Days: {days}</h6>
                    <Card.Text>
                        {description.toString(10)}
                    </Card.Text>
                    <h6>Review : {review}</h6>
                    <h6>Price :{Price}$ </h6>

                </Card.Body>
                <Button>Book Now</Button>
            </Card>
        </Col >
    );
};

export default HomeDestination;