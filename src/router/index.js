import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Clothes from '../pages/Clothes';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail';
import Register from '../pages/Register';

export const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/:gender/:id',
        component: ProductDetail,
    },
    {
        path: '/clothes/:gender',
        component: Clothes,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/checkout',
        component: Checkout,
    },
    {
        path: '/cart',
        component: Cart,
    },
];
export const privateRoutes = [];
