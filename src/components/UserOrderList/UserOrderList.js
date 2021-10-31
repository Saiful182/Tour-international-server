import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import useCart from '../hooks/useCart';
import CartDetails from './CartDetails/CartDetails';


import './UserOrderList.css'

const UserOrderList = () => {
    const { user } = useAuth();
    const { cart } = useCart();
    const userCart = cart.filter(id => (id.use_name === user.displayName));

    return (

        <div className="cart-info-conatiner">
            <div >
                <div className="cart-info">
                    {
                        cart.length === 0 ? <Spinner className="spinner" animation="border" /> : <Row xs={1} md={2} lg={3} className="g-4">
                            {
                                userCart.map(cart => <CartDetails cart={cart} key={cart._id}></CartDetails>)
                            }
                        </Row>
                    }
                </div>
            </div >
            <div className="cart-price">
                <h3>Total Pakage Selected {userCart.length}</h3>


            </div>
        </div >
    );
};

export default UserOrderList;