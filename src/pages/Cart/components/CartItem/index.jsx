import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../../../store/slice/cartSlice';

import './cartitem.scss';

const CartItem = ({ product }) => {
    const [quantity, setQuantity] = useState(product.count);

    const dispatch = useDispatch();

    const increaQuantity = (code, quantity, size) => {
        dispatch(
            cartSlice.actions.changeQuantity({
                code,
                quantity,
                size,
            }),
        );
        setQuantity(quantity + 1);
    };

    const prevQuantity = (code, quantity, size) => {
        if (quantity > 1) {
            dispatch(
                cartSlice.actions.changeQuantity({
                    code,
                    quantity,
                    size,
                }),
            );
            setQuantity(quantity - 1);
        } else {
            dispatch(
                cartSlice.actions.deleteItem({
                    code,
                    size,
                }),
            );
        }
    };

    console.log(product);

    return (
        <div className="cart__item">
            <img src={product.src[0]} alt="" />

            <div className="item__info">
                <h3>{product.name}</h3>
                <p>Size : {product.size}</p>
            </div>

            <div className="item__btn">
                <div onClick={() => prevQuantity(product.code, quantity, product.size)}>-</div>
                <div className="">{quantity}</div>
                <div onClick={() => increaQuantity(product.code, quantity, product.size)}>+</div>
            </div>
            <div className="item__price">{product.price}đ</div>
        </div>
    );
};

export default CartItem;
