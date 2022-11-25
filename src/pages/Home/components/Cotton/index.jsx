import React from 'react';

import './cotton.scss';

export const cotton = [
    {
        id: 1,
        src: 'https://onoff.vn/media/import/banneronoff/Web/tencel-2021-01.jpg',
        name: 'COTTON TENCEL',
        description:
            'Chất liệu Cotton tencel là sự kết hợp hài hòa giữa Tencel và Cotton giúp phát huy tối đa ưu điểm của mỗi loại chất liệu: Sự mềm mại, cảm giác mát lạnh, độ bền và khả năng định hình phom dáng cùng tính năng kháng khuẩn tự nhiên.',
        btn: ['Nam', 'Nữ', 'Trẻ em'],
    },
    {
        id: 2,
        src: 'https://onoff.vn/media/import/banneronoff/Web/cotton-2021-01.jpg',
        name: 'COTTON USA',
        description:
            'Cotton USA được ví như loại chất liệu “biết thở” – Breathable bởi khả năng thấm hút vượt trội cùng cơ chế làm mát tự nhiên giúp cân bằng độ ẩm, đảm bảo an toàn cho vùng da nhạy cảm sẽ giúp bạn luôn thoải mái với mọi trang phục ngay cả trong những ngày hè oi bức.',
        btn: ['Nam', 'Nữ', 'Trẻ em'],
    },
];

const Cotton = () => {
    return (
        <div className="cotton">
            <h2 className="cotton__title">Felling good</h2>
            <p className="cotton__subtitle">
                Thương hiệu đồ lót mang tới trải nghiệm thoải mái mỗi ngày cho mọi người.
            </p>
            <div className="cotton__list">
                {cotton.map((item) => {
                    return (
                        <div key={item.id} className="cotton__item">
                            <div className="cotton__item__box">
                                <img src={item.src} alt="" />
                                <div className="cotton__item__box__text">
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>

                            <div className="cotton__btn">
                                {item.btn.map((btns, index) => {
                                    return <button key={index}>{btns}</button>;
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cotton;
