
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import './Orders.css'

const Orders = (props) => {
    const { cart, setCart } = useCart()
    const { approval, country, _id, use_name, pakage_name, product_img, price } = props.cart;
    const handelRemoveiteam = id => {
        const procced = window.confirm('are you really want to delete this data?');
        if (procced) {
            const url = `https://stark-shore-53835.herokuapp.com/cart/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingCart = cart.filter(pakage => pakage._id !== id)
                        setCart(remainingCart);
                        alert('deleted successfully');
                    }
                })

        }
    }
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
            <Card className="manage-all-card shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
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
                    {
                        approval !== 'Approved' && <Button onClick={() => handelApproval(_id)} className="cart-button" variant="primary">Aprrove</Button>
                    }
                    <Button onClick={() => handelRemoveiteam(_id)} className="cart-button">Delete Pakage</Button>
                </Card.Body>
            </Card>
        </Col >

    );
};

export default Orders;