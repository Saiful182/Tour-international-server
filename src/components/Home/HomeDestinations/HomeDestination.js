import axios from 'axios';
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './HomeDestination.css'

const HomeDestination = (props) => {
    const { user } = useAuth();
    const { name, country, _id, description, days, img3, Price, places, review } = props.pakage;
    const handelBook = () => {
        const cart = {
            use_name: user.displayName,
            pakage_name: name,
            product_img: img3,
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
                {
                    user.email ?

                        <Button onClick={handelBook}>Book Now</Button> :
                        <Button as={Link} to='/login'>Book Now</Button>
                }
            </Card>
        </Col >
    );
};

export default HomeDestination;