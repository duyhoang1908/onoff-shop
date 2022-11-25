import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { filterProductsWithType, getProductsByGender } from '../../firebase/services';

import './clothes.scss';
import Content from './components/Content';
import Filter from './components/Filter';
import Path from './components/Path';

const Clothes = () => {
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState('');
    const [loading, isLoading] = useState(true);

    const { gender } = useParams();
    useEffect(() => {
        isLoading(true);
        const fetchProduct = async () => {
            try {
                const data = await getProductsByGender(gender);
                setProducts(data);
                setTimeout(() => {
                    isLoading(false);
                }, 1500);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
        return () => clearTimeout();
    }, [gender]);
    const handleSort = (e) => {
        if (e === '2') {
            setSort(e);
            const newProducts = products.sort((a, b) => {
                return a.price - b.price;
            });
            setProducts(newProducts);
        } else if (e === '3') {
            setSort(e);
            const newProducts = products.sort((a, b) => {
                return b.price - a.price;
            });
            setProducts(newProducts);
        }
    };

    const filterProducts = (type) => {
        filterProductsWithType(gender, type).then((res) => {
            setProducts(res);
        });
    };

    return (
        <Fragment>
            {loading ? (
                <Loading />
            ) : (
                <div className="product">
                    <Path gender={gender} />

                    <div className="product__content">
                        <Filter filterProducts={filterProducts} />

                        <Content products={products} handleSort={handleSort} gender={gender} sort={sort} />
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default Clothes;
