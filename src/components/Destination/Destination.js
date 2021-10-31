import React from 'react';
import { Button, Card, Carousel, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import './Destination.css'

const Destination = (props) => {
    const { user } = useAuth();

    const handelBook = () => {
        const cart = {
            use_name: user.displayName,
            pakage_name: name,
            product_img: img2,
            price: Price,
            country: country,
            id: _id,
            approval: 'pending'
        }
        axios.post('https://stark-shore-53835.herokuapp.com/cart', cart)
            .then(res => {
                alert('Pakage added to your Order list');
            })

    }
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
                        {
                            user.email ?
                                <Button onClick={handelBook}>Book Now</Button> :
                                <Button as={Link} to='/login'>Book Now</Button>
                        }
                    </Card>
                </Col>
            }

        </div>
    );
};

export default Destination;