import React from 'react';
import useCart from '../hooks/useCart';
import Orders from './Orders/Orders';
import './Manageorder.css'
import { Row, Spinner } from 'react-bootstrap';

const ManageAllOrders = () => {
    const { cart } = useCart();

    return (
        <div className="orders-container">
            <h2>Pakages Ordered from users</h2>
            {
                cart.length === 0 ? <Spinner className="spinner" animation="border" /> : <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        cart.map(cart => <Orders cart={cart} key={cart._id}></Orders>)
                    }

                </Row>
            }

        </div>
    );
};

export default ManageAllOrders;