import React from 'react';
import Card from '../../../../components/Card';

const Content = ({ products, handleSort, gender, sort }) => {
    return (
        <div className="product__right">
            <div className="product__right__header">
                <h1>{gender === 'man' ? 'SẢN PHẨM NAM' : gender === 'woman' ? 'SẢN PHẨM NỮ' : 'SẢN PHẨM TRẺ EM'}</h1>
                <span>
                    <p>Sắp xếp theo</p>
                    <select
                        value={sort}
                        onChange={(e) => {
                            handleSort(e.target.value);
                        }}
                    >
                        <option value="1">Lựa chọn</option>
                        <option value="2">Giá tăng dần</option>
                        <option value="3">Giá giảm dần</option>
                    </select>
                </span>
            </div>

            <div className="product__right__content">
                {products.map((item) => {
                    return <Card product={item} />;
                })}
            </div>
        </div>
    );
};

export default Content;
