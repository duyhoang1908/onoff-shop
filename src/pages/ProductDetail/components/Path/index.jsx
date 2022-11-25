import React from 'react';
import { Link } from 'react-router-dom';

import './path.scss';

const Path = ({ products }) => {
    const gender = products.sex === 'woman' ? 'NỮ' : products.sex === 'child' ? 'TRẺ EM' : 'NAM';

    return (
        <div className="clothes__path">
            <Link to="/">TRANG CHỦ</Link>
            <Link to="/">SẢN PHẨM {gender}</Link>
            <p>{products.name}</p>
        </div>
    );
};

export default Path;
