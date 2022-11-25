import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';

import './login.scss';

const Login = () => {
    return (
        <div className="login">
            <LoginForm />
            <div className="login__change">
                <span>Khách hàng mới</span>
                <button>
                    <Link to="/register">Đăng ký</Link>
                </button>
            </div>
        </div>
    );
};

export default Login;
