import React from 'react';
import { Link } from 'react-router-dom';

const Path = ({ gender }) => {
    return (
        <div className="product__link">
            <Link to="/" className="product__link__home">
                TRANG CHỦ
            </Link>
            <p>{gender === 'man' ? 'SẢN PHẨM NAM' : gender === 'woman' ? 'SẢN PHẨM NỮ' : 'SẢN PHẨM TRẺ EM'}</p>
        </div>
    );
};

export default Path;
