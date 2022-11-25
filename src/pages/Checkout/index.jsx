import React, { useEffect, useState } from 'react';
import CheckOutForm from './components/Form';

import './checkout.scss';
import axios from 'axios';

const Checkout = () => {
    const [dataCitys, setDataCitys] = useState([]);
    const [dataDistricts, setDataDistricts] = useState([]);
    const [dataAddress, setDataAddress] = useState([]);

    useEffect(() => {
        const fecthDataDress = async () => {
            try {
                const res = await axios.get('https://provinces.open-api.vn/api/?depth=2');
                setDataAddress(res.data);
                const citys = res.data.map((item) => ({
                    label: item.name,
                    value: item.codename,
                }));
                setDataCitys(citys);
                setDataDistricts(res.data[0].districts);
            } catch (error) {
                console.log(error);
            }
        };
        fecthDataDress();
    }, []);

    return (
        <div className="checkout">
            <div className="checkout__form">
                <h1>Thông tin của bạn</h1>
                <CheckOutForm
                    dataCitys={dataCitys}
                    setDataCitys={setDataCitys}
                    dataDistricts={dataDistricts}
                    setDataDistricts={setDataDistricts}
                    dataAddress={dataAddress}
                    setDataAddress={setDataAddress}
                />
            </div>
        </div>
    );
};

export default Checkout;
