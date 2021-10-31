import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import './CartDetails.css'

const CartDetails = (props) => {
    const { cart, setCart } = useCart();
    const { approval, country, use_name, _id, pakage_name, product_img, price } = props.cart;

    const handelRemoveiteam = id => {
        // const procced = window.confirm('are you really want to delete this data?');
        // if (procced) {
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
    return (
        <Card className="card-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product_img} />
            <Card.Body>
                <Card.Title>{pakage_name}</Card.Title>
                <Card.Text>
                    {country}
                </Card.Text>
                <h4>Price: {price} $</h4>
                <Card.Text>
                    Status: {approval}
                </Card.Text>
                <Button onClick={() => handelRemoveiteam(_id)} variant="primary">Remove Iteam</Button>
            </Card.Body>
        </Card>
    );
};
export default CartDetails;