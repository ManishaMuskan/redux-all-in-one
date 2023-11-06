import { createSlice } from '@reduxjs/toolkit';

const initialState = { showCart: true, notification: null };

const uiSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleCart(state) {
			state.showCart = !state.showCart;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
		hideNotification(state) {
			state.notification = null;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
