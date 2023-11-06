import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [
		// {
		// 	id: 2,
		// 	title: 'product 2',
		// 	price: 16,
		// 	quantity: 2,
		// 	total: 32,
		// 	description: 'This is a second product - amazing!',
		// },
		// {
		// 	id: 3,
		// 	title: 'product 3',
		// 	price: 10,
		// 	quantity: 1,
		// 	total: 10,
		// 	description: 'This is a third product - amazing!',
		// },
	],
	changed: false,
	totalItems: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		getAllCartItems(state, action) {
			state.items = [...action.payload.cartItems];
		},
		replaceCart(state, action) {
			state.items = action.payload.items;
			state.totalItems = action.payload.totalItems;
		},
		addToCart(state, action) {
			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.item.id
			);

			state.totalItems += 1;
			state.changed = true;

			if (existingCartItemIndex > -1) {
				state.items[existingCartItemIndex].quantity += 1;
				state.items[existingCartItemIndex].total +=
					state.items[existingCartItemIndex].price;
			} else {
				const total = action.payload.item.total + action.payload.item.price;
				const newCartItem = {
					...action.payload.item,
					quantity: 1,
					total,
				};
				state.items.push(newCartItem);
			}
		},
		removeFromCart(state, action) {
			state.totalItems -= 1;
			state.changed = true;
			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.itemId
			);

			if (state.items[existingCartItemIndex].quantity === 1) {
				state.items = state.items.filter(
					(item) => item.id !== action.payload.itemId
				);
			} else {
				state.items[existingCartItemIndex].quantity--;
				state.items[existingCartItemIndex].total -=
					state.items[existingCartItemIndex].price;
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
