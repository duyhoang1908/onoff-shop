import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../store/selector';
import CartTable from './components/CartTable';

import './cart.scss';
import CartTotal from './components/CartTotal';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart = useSelector(cartSelector);

    const [totalMoney, setTotalMoney] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);

    useEffect(() => {
        const total = cart.reduce((a, b) => {
            return a + b.price * b.count;
        }, 0);

        const products = cart.reduce((a, b) => {
            return a + b.count;
        }, 0);
        setTotalMoney(total);
        setTotalProduct(products);
    }, [cart]);

    return (
        <>
            {cart.length === 0 ? (
                <div className="cart">
                    <h1 className="cart__title">Chưa có sản phẩm nào trong giỏ hàng</h1>
                    <div className="back__home__btn">
                        <Link to="/">
                            <Button type="Trở lại mua sắm" />
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="cart">
                    <h1 className="cart__title">GIỎ HÀNG</h1>
                    <div className="cart_content">
                        <CartTable cart={cart} />
                        <CartTotal totalMoney={totalMoney} totalProduct={totalProduct} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
