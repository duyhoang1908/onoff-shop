import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';

import './register.scss';

const Register = () => {
    return (
        <div className="login">
            <RegisterForm />
            <div className="login__change">
                <span>Khách hàng mới</span>
                <button>
                    <Link to="/login">Đăng nhập</Link>
                </button>
            </div>
        </div>
    );
};

export default Register;
