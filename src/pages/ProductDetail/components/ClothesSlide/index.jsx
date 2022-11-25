import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import './clothesslide.scss';

const ClothesSlide = ({ products }) => {
    const [step, setStep] = useState(0);
    const nextSlider = () => {
        if (step < products.src.length - 1) setStep(step + 1);
        else setStep(0);
    };

    const prevSlider = () => {
        if (step === 0) setStep(products.src.length - 1);
        else setStep(step - 1);
    };

    return (
        <div className="clothes__slide">
            <div className="clothes__slide__list">
                {products.src.map((item, index) => {
                    return (
                        <div
                            style={{
                                border: index === step ? '4px solid #337ab7' : '',
                            }}
                            key={index}
                            className="right__list__img"
                        >
                            <img onClick={() => setStep(index)} src={item} alt="" />
                        </div>
                    );
                })}
            </div>
            <div className="clothes__slide__show">
                <div className="clothes__slide__show__box">
                    <button onClick={nextSlider} className="slider__btn--next">
                        <FaAngleRight size={50} style={{ opacity: '0.8' }} />
                    </button>
                    <button onClick={prevSlider} className="slider__btn--prev">
                        <FaAngleLeft size={50} style={{ opacity: '0.8' }} />
                    </button>
                    <div style={{ transform: `translateX(${step * -100}%)` }} className="clothes__slide__show__slider">
                        {products.src.map((item, index) => {
                            return <img key={index} src={item} alt="" />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClothesSlide;
