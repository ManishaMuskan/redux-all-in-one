import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-slice';
import productsReducer from './products-slice';
import uiReducer from './ui-slice';

const store = configureStore({
	reducer: { cart: cartReducer, products: productsReducer, ui: uiReducer },
});

export default store;
