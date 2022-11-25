import React, { useState } from 'react';
import { FaBars, FaUser, FaMapMarkerAlt, FaShoppingBag } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { cartSelector, userSelector } from '../../store/selector';
import SearchInput from './components/SearchForm';
import './header.scss';

const Header = () => {
    const [navBar, isNavBar] = useState(false);

    const user = useSelector(userSelector);
    const cart = useSelector(cartSelector);

    return (
        <div className="nav">
            <div onClick={() => isNavBar(!navBar)} className="nav__bar">
                <FaBars />
            </div>
            <div className="nav__logo">
                <Link to="/">
                    <img src="https://onoff-clone.netlify.app/static/media/logo.ae12c6c9.svg" alt="logo" />
                </Link>
            </div>
            <div className="nav__list">
                <ul>
                    <li>
                        <NavLink activeClassName="active" to="/clothes/man">
                            NAM
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/clothes/woman">
                            NỮ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/clothes/child">
                            TRẺ EM
                        </NavLink>
                    </li>
                </ul>
            </div>
            <SearchInput />
            <div className="nav__user">
                <FaMapMarkerAlt size={20} />
                <Link
                    style={{ marginLeft: '5px', color: '#000', display: 'flex' }}
                    to={Object.keys(user).length ? '/' : '/login'}
                >
                    <p>
                        <FaUser size={20} />
                    </p>
                    {Object.keys(user).length ? <p style={{ fontSize: '14px' }}>{user.displayName}</p> : ''}
                </Link>
            </div>
            <Link to="/cart" className="nav__cart">
                <span>{cart.length}</span>
                <FaShoppingBag size={20} />
            </Link>

            <div className="navbar" style={{ transform: navBar ? 'translateX(0)' : '' }}>
                <ul>
                    <li>
                        <Link onClick={() => isNavBar(!navBar)} to="/clothes/man">
                            NAM
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => isNavBar(!navBar)} to="/clothes/woman">
                            NỮ
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => isNavBar(!navBar)} to="/clothes/child">
                            TRẺ EM
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="nav__footer">
                <a href="/">
                    <i className="fa-solid fa-house-chimney"></i>
                </a>
                <a href="/">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href="/">
                    <i className="fa-solid fa-location-dot"></i>
                </a>
                <a href="/">
                    <i className="fa-solid fa-user"></i>
                </a>
            </div>
        </div>
    );
};

export default Header;
