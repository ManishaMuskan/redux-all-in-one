import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
};

const productsSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		getAllProducts(state, action) {
			state.products = action.payload.products;
		},
		addProduct(state, action) {},
		removeProduct(state, action) {},
	},
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
