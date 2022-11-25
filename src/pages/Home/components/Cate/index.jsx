import React from 'react';
import { Link } from 'react-router-dom';

import './cate.scss';

export const cate = [
    {
        id: 1,
        src: 'https://onoff.vn/media/import/banneronoff/Web/banner/underwear-men-2021.jpg',
        name: 'đồ nam',
    },
    {
        id: 2,
        src: 'https://onoff.vn/media/import/banneronoff/Web/banner/kids-2021-1.jpg',
        name: 'đồ trẻ em',
    },
    {
        id: 3,
        src: 'https://onoff.vn/media/import/banneronoff/Web/banner/underwear-women-2021-1.jpg',
        name: 'đồ nữ',
    },
];

const Cate = () => {
    return (
        <div className="cate">
            {cate.map((item) => {
                return (
                    <div key={item.id} className="cate__item">
                        <img loading="lazy" src={item.src} alt="" />
                        <div className="cate__contact">
                            <h2>{item.name}</h2>
                            <button className="view__btn">
                                <Link
                                    to={
                                        item.id === 1
                                            ? '/clothes/man'
                                            : item.id === 3
                                            ? '/clothes/woman'
                                            : '/clothes/child'
                                    }
                                >
                                    XEM NGAY
                                </Link>
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cate;
