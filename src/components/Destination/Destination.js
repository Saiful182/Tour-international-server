import React from 'react';
import { Button, Card, Carousel, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Destination.css'

const Destination = (props) => {
    const { name, country, _id, description, days, img1, img2, img3, Price, places, review } = props.pakage;


    return (
        <div>

            {
                <Col>
                    <Card className="total-destination-card">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>

                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <h6> {country}</h6>
                            <h6>Places will be cover: {places}</h6>
                            <h6>Pakage Days: {days}</h6>
                            <Card.Text>
                                Description: {description}
                            </Card.Text>
                            <h6>Review : {review}</h6>
                            <h6>Price :{Price}$ </h6>

                        </Card.Body>
                        <Button as={Link} to='/userorderlist' >Book Now</Button>
                    </Card>
                </Col>
            }

        </div>
    );
};

export default Destination;