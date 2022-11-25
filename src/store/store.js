import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './slice/cartSlice';
import { productSlice } from './slice/productSlice';
import { userSlice } from './slice/userSlice';

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        cart: cartSlice.reducer,
        user: userSlice.reducer,
    },
});

export default store;
