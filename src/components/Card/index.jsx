import React from 'react';
import { Link } from 'react-router-dom';

import './card.scss';

const Card = ({ product }) => {
    return (
        <div key={product.id} className="product__item">
            <Link to={`/${product.sex}/${product.code}`}>
                <div className="product__item__img">
                    <img src={product.src[1]} alt="" loading="lazy" />
                    <img src={product.src[0]} alt="" loading="lazy" />
                </div>
                <p className="product__name">{product.name}</p>
                <p className="product__price--sale">{product.price}đ</p>
                <p className="product__price">{product.price}đ</p>
            </Link>
        </div>
    );
};

export default Card;
