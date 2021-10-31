import React from 'react';
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
                        userCart.map(cart => <CartDetails cart={cart} key={cart._id}></CartDetails>)
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