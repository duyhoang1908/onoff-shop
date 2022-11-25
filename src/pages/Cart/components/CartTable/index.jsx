import React from 'react';
import CartItem from '../CartItem';

const CartTable = ({ cart }) => {
    return (
        <div className="cart__table">
            {cart.map((product) => (
                <CartItem product={product} />
            ))}
        </div>
    );
};

export default CartTable;
