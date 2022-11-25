import React from 'react';

const Filter = ({ filterProducts }) => {
    return (
        <div className="product__sidebar">
            <div className="product__sidebar__list">
                <p>DANH MỤC</p> <i className="fa-solid fa-angle-down"></i>
            </div>
            <form className="product__sidebar__sublist">
                <p>
                    <input type="radio" name="type" id="ao" onChange={(e) => filterProducts(e.target.id)} />
                    <label htmlFor="ao">Áo</label>
                </p>
                <p>
                    <input type="radio" name="type" id="quan" onChange={(e) => filterProducts(e.target.id)} />
                    <label htmlFor="quan">Quần</label>
                </p>
                <p>
                    <input type="radio" name="type" id="tat" onChange={(e) => filterProducts(e.target.id)} />
                    <label htmlFor="tat">Bít tất</label>
                </p>
            </form>
            <div className="product__sidebar__list">
                <p>MÀU SẮC</p> <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="product__sidebar__list">
                <p>KÍCH CỠ</p> <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="product__sidebar__list">
                <p>CHẤT LIỆU</p> <i className="fa-solid fa-angle-down"></i>
            </div>
        </div>
    );
};

export default Filter;
