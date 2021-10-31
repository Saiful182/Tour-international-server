
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import './Orders.css'

const Orders = (props) => {
    const { cart, setCart } = useCart()
    const { approval, country, _id, use_name, pakage_name, product_img, price } = props.cart;
    const handelApproval = id => {
        const approvedPakage = cart.filter(pakage => pakage._id === id)

        const url = `https://stark-shore-53835.herokuapp.com/cart/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approvedPakage)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    alert('updated data sucessfully');

                }

            })
    }

    return (
        <Col>
            <Card className="card-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product_img} />
                <Card.Body>
                    <Card.Title>{pakage_name}</Card.Title>
                    <Card.Text>
                        {country}
                    </Card.Text>
                    <h4>Price: {price} $</h4>
                    <h6>User Name: {use_name}</h6>
                    <Card.Text>
                        Status: {approval}
                    </Card.Text>




                    <Button onClick={() => handelApproval(_id)} className="cart-button" variant="primary">Aprrove</Button>


                </Card.Body>
            </Card>
        </Col >

    );
};

export default Orders;