import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import { getProductsByGender } from '../../firebase/services';
import Cate from './components/Cate';
import Cotton from './components/Cotton';

import './home.scss';
import 'swiper/css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        !isLoading && setIsLoading(true);
        const fetchData = async () => {
            const data = await getProductsByGender('woman');
            setProducts(data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="home">
            <Link to="/">
                <div className="banner"></div>
            </Link>

            <Cate />

            <div className="product">
                <h2 className="product__title">Sản phẩm mới</h2>

                {isLoading ? (
                    <div className="product__list">
                        <Loading />
                    </div>
                ) : (
                    <Swiper spaceBetween={50} slidesPerView={3.5}>
                        {products.map((product) => {
                            return (
                                <SwiperSlide>
                                    <Card product={product} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                )}
            </div>

            <Cotton />

            <div className="footer__banner">
                <img
                    src="https://onoff.vn/static/version1646303740/frontend/Of/default/en_US/images/store.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Home;
