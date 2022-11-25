import React from 'react';
import Button from '../../../../components/Button';

import './carttotal.scss';

const CartTotal = ({ totalMoney, totalProduct }) => {
    return (
        <div className="cart__total__content">
            <div className="cart__total">
                <h2>Thanh toán</h2>
                <div className="total__groups">
                    <p>Số sản phẩm:</p> <p>{totalProduct}</p>
                </div>
                <div className="total__groups">
                    <p>Tổng số tiền:</p> <p>{totalMoney}đ</p>
                </div>
                <div className="pay__btn">
                    <Button type="THANH TOÁN" />
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
