import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userSelector } from '../../../../store/selector';
import { cartSlice } from '../../../../store/slice/cartSlice';

import './info.scss';

const Info = ({ products }) => {
    const [count, setCount] = useState(1);
    const [size, setSize] = useState('');
    const [err, setErr] = useState(false);

    const user = useSelector(userSelector);

    const dispatch = useDispatch();
    const history = useNavigate();

    const AddItemToCart = (size, count) => {
        if (Object.keys(user).length) {
            const data = {
                name: products.name,
                code: products.code,
                size: size,
                count: count,
                price: products.price,
                src: products.src,
                uid: user.uid,
            };
            dispatch(cartSlice.actions.setCart(data));
            toast('Sản phẩm đã được thêm vào giỏ hàng.');
        } else history('/login');
    };

    return (
        <div className="info">
            <div className="info__header">
                <h2>{products.name}</h2>
                <div className="clothes__info">
                    <p>SKU#: {products.code}</p>
                    <p>Đã bán: {products.sold}</p>
                </div>
            </div>

            <div className="clothes__content">
                <div className="clothes__price">
                    <p>{products.price} đ</p>
                    <span>{products.price} đ</span>
                </div>

                <div className="clothes__size">
                    <div className="clothes__content__title">KÍCH CỠ: {size}</div>
                    <div className="clothes__size__option">
                        <span onClick={(e) => setSize('S')}>S</span>
                        <span onClick={(e) => setSize('M')}>M</span>
                        <span onClick={(e) => setSize('L')}>L</span>
                        <span onClick={(e) => setSize('XL')}>XL</span>
                        <p>
                            <i className="fa-solid fa-chart-column"></i> bảng size
                        </p>
                    </div>

                    <p style={{ display: err ? 'block' : 'none' }} className="clothes__err">
                        <i className="fa-solid fa-triangle-exclamation"></i> Vui lòng chọn size!
                    </p>
                </div>

                <div className="clothes__count">
                    <div className="clothes__content__title">SỐ LƯỢNG:</div>
                    <div className="clothes__count__option">
                        <button
                            onClick={() => {
                                if (count > 1) setCount(count - 1);
                            }}
                            className="prev__count"
                        >
                            -
                        </button>
                        <p>{count}</p>
                        <button onClick={() => setCount(count + 1)} className="next__count">
                            +
                        </button>
                    </div>
                </div>

                <div className="clothse__notice">
                    <p>
                        <i className="fa-solid fa-car-side"></i> [07-10/09] MIỄN PHÍ VẬN CHUYỂN{' '}
                        <span>cho mọi đơn hàng</span>
                    </p>
                    <p>
                        <i className="fa-solid fa-arrow-rotate-right"></i> HOÀN TIỀN 100%{' '}
                        <span>cho các sản phẩm không đúng với đơn hàng</span>
                    </p>
                    <p>
                        <i className="fa-solid fa-file-invoice-dollar"></i> KIỂM TRA HÀNG TRƯỚC KHI THANH TOÁN
                    </p>
                    <p>
                        <i className="fa-solid fa-arrow-right-arrow-left"></i> MIỄN PHÍ ĐỔI TRẢ{' '}
                        <span>trong vòng 15 ngày kể từ ngày mua hàng.</span>
                    </p>
                </div>

                <button
                    onClick={() => {
                        if (size) {
                            AddItemToCart(size, count);
                        } else setErr(true);
                    }}
                    className="addcart__btn"
                >
                    THÊM VÀO GIỎ HÀNG
                </button>
            </div>
        </div>
    );
};

export default Info;
