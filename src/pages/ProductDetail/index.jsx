import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { getProductDetail } from '../../firebase/services';

import './productdetail.scss';
import Path from './components/Path';
import ClothesSlide from './components/ClothesSlide';
import Info from './components/Info';

const ProductDetail = () => {
    const { gender, id } = useParams();
    //   const dispatch = useDispatch();
    //   const user = useSelector(userSelector);
    //   const history = useNavigate();

    const [products, setProducts] = useState({});
    const [loading, isLoading] = useState(true);
    useEffect(() => {
        isLoading(true);
        const fetchProduct = async () => {
            try {
                const data = await getProductDetail(gender, id);
                setProducts(data);
                isLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [gender, id]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="clothes">
                    {!!Object.values(products).length && (
                        <>
                            <Path products={products} />

                            <div className="clothes__container">
                                <ClothesSlide products={products} />

                                <Info products={products} />
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default ProductDetail;
