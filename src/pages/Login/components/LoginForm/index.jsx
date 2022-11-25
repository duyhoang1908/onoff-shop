import React, { useState } from 'react';
import { loginSchema } from '../../../../schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { auth } from '../../../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { userSlice } from '../../../../store/slice/userSlice';

import Button from '../../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [isPending, setIsPending] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(loginSchema),
    });

    const handleLoginWithEmail = (data) => {
        setIsPending(true);
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const data = {
                    uid: userCredential.user.uid,
                    displayName: userCredential.user.displayName,
                    email: userCredential.user.email,
                };
                dispatch(userSlice.actions.setUser(data));
                reset();
                history('/');
            })
            .catch((error) => {
                console.log(error.message);
                switch (error.message) {
                    case 'Firebase: Error (auth/wrong-password).':
                        toast.warning('Tài khoản hoặc mật khẩu không chính xác');
                        break;
                    case 'Firebase: Error (auth/user-not-found).':
                        toast.warning('Người dùng không tồn tại!');
                        break;
                    default:
                        toast.error('Đã có lỗi xảy ra!');
                }
            });
        setIsPending(false);
    };

    return (
        <div className="login__content">
            <h1 className="login__title">TÀI KHOẢN</h1>
            <span className="login__span">Khách hàng đã đăng ký tài khoản</span>
            <p>Bạn đã có tài khoản, xin mời đăng nhập bằng địa chỉ email đăng ký.</p>
            <form onSubmit={handleSubmit(handleLoginWithEmail)}>
                <div className="login__input">
                    <label htmlFor="email">
                        Email <span>*</span>
                    </label>
                    <input type="text" name="email" {...register('email')} />
                    <p className="login__error">{errors.email?.message}</p>
                </div>

                <div className="login__input">
                    <label htmlFor="password">
                        Mật khẩu <span>*</span>
                    </label>
                    <input type="password" name="password" {...register('password')} />
                    <p className="login__error">{errors.password?.message}</p>
                </div>

                <div className="login__btn">
                    <Button isPending={isPending} type="Đăng nhập" />
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
