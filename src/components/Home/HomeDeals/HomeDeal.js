import axios from 'axios';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './HomeDeal.css'

const HomeDeal = (props) => {
    const { user } = useAuth();
    const { name, Price, country, _id, places, img } = props.place;
    const handelBook = () => {
        const cart = {
            use_name: user.displayName,
            pakage_name: name,
            product_img: img,
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
        <div>
            <Col>
                <Card className="bd-info-card shadow p-3 mb-5 bg-body rounded">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {places}
                        </Card.Text>
                        <p>Price: {Price} $</p>
                    </Card.Body>
                    {
                        user.email ?

                            <Button onClick={handelBook}>Book Now</Button> :
                            <Button as={Link} to='/login'>Book Now</Button>
                    }
                </Card>
            </Col>
        </div>
    );
};

export default HomeDeal;