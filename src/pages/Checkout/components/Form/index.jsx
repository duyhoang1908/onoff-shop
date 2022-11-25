import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { checkoutSchema } from '../../../../schema';
import { cartSelector, userSelector } from '../../../../store/selector';
import { buyProducts } from '../../../../firebase/services';

import Button from '../../../../components/Button';
import { cartSlice } from '../../../../store/slice/cartSlice';

const CheckOutForm = ({ dataAddress, dataDistricts, setDataDistricts, dataCitys, setDataCitys }) => {
    const [isPending, setIsPending] = useState(false);

    const history = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector(cartSelector);
    const user = useSelector(userSelector);

    console.log(dataDistricts);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(checkoutSchema),
    });

    const handleConfirm = async (data) => {
        setIsPending(true);
        const collection = {
            cart: cart.cart,
            uid: user.uid,
            username: user.displayName,
            phone: data.phone,
            city: data.city,
            districts: data.districts,
            address: data.address,
            totalPrice: cart.price,
        };
        await buyProducts(collection);
        dispatch(cartSlice.actions.resetCart());
        history('/profile');
        setIsPending(true);
        console.log(data);
        reset();
    };

    const handleOnChange = (e) => {
        const cityFiltered = dataAddress.filter((i) => i.name === e.target.value);
        console.log(cityFiltered[0].districts);
        setDataDistricts(cityFiltered[0].districts);
    };

    return (
        <form onSubmit={handleSubmit(handleConfirm)}>
            <div className="form__groups">
                <div
                    className="form"
                    style={{
                        border: errors.phone ? '2px solid red' : '1px solid #000',
                        color: errors.phone ? 'red' : '#000',
                    }}
                >
                    <FaUserAlt />
                    <input type="text" placeholder="Nhập số điện thoại" {...register('phone')} />
                </div>
            </div>
            <div className="form__groups">
                <div className="form">
                    <FaUserAlt />
                    <select {...register('city')} onChange={handleOnChange} defaultValue={dataCitys[0]?.label}>
                        <option>Tỉnh, Thành phố</option>
                        {dataCitys.map((city) => {
                            return (
                                <option value={city.label} key={city.codename}>
                                    {city.label}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="form">
                    <FaUserAlt />
                    <select {...register('districts')}>
                        <option>Quận, Huyện</option>
                        {dataDistricts.map((district) => {
                            return (
                                <option value={district.name} key={district.code}>
                                    {district.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="form__groups">
                <div
                    className="form"
                    style={{
                        border: errors.address ? '2px solid red' : '1px solid #000',
                        color: errors.address ? 'red' : '#000',
                    }}
                >
                    <FaUserAlt />
                    <input
                        type="text"
                        placeholder="Nhập địa chỉ cụ thể: số nhà, số đường ..."
                        {...register('address')}
                    />
                </div>
            </div>
            <Button isPending={isPending} type="Xác nhận" />
        </form>
    );
};

export default CheckOutForm;
