import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        price: 0,
    },
    reducers: {
        setCart: (state, action) => {
            let check = true;
            state.cart.forEach((item) => {
                if (item.code === action.payload.code && item.size === action.payload.size) {
                    item.count += action.payload.count;
                    check = false;
                }
            });
            if (check) state.cart = [...state.cart, action.payload];
            console.log(state.cart);
        },
        deleteItem: (state, action) => {
            const newCart = state.cart.filter(
                (item) => item.code !== action.payload && item.size !== action.payload.size,
            );
            state.cart = [...newCart];
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
        resetCart: (state) => {
            state.cart = [];
            state.price = 0;
        },

        changeQuantity: (state, action) => {
            const newState = state.cart.map((item) => {
                if (action.payload.code === item.code && action.payload.size === item.size)
                    item.count = action.payload.quantity;
                return item;
            });

            state.cart = [...newState];
        },
    },
});
