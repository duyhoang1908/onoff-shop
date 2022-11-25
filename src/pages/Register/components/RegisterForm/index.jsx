import React, { useState } from 'react';
import { registerSchema } from '../../../../schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { auth } from '../../../../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDocument } from '../../../../firebase/services';

import Button from '../../../../components/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [isPending, setIsPending] = useState(false);

    const history = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(registerSchema),
    });
    const handleRegister = async (data) => {
        setIsPending(true);
        await createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: data.username,
                });
                addDocument('user', {
                    displayName: data.username,
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                });
                reset();
                toast('ON OFF xin chào bạn.');
                history('/login');
            })
            .catch((error) => {
                switch (error.message) {
                    case 'Firebase: Error (auth/email-already-in-use).':
                        toast.warning('Tài khoản đã tồn tại.');
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
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="login__input">
                    <label htmlFor="username">
                        Tên người dùng <span>*</span>
                    </label>
                    <input type="text" name="username" {...register('username')} />
                    <p className="login__error">{errors.username?.message}</p>
                </div>

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
                    <input type="password" name="comfirpassword" {...register('password')} />
                    <p className="login__error">{errors.password?.message}</p>
                </div>

                <div className="login__input">
                    <label htmlFor="confirmPassword">
                        Nhập lại mật khẩu <span>*</span>
                    </label>
                    <input type="password" name="confirmPassword" {...register('confirmPassword')} />
                    <p className="login__error">{errors.confirmPassword?.message}</p>
                </div>

                <div className="login__btn">
                    <Button isPending={isPending} type="Đăng ký" />
                    <p>Đây là rằng buộc *</p>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
