import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

const store = configureStore({
	reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// ------------------COUNTERSLICE (SINGLE REDUCER) CODE WHEN THE SLICES ARE NOT SEPERATED ---------------------

// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const initialState = { counter: 0, showCounter: false };

// const counterSlice = createSlice({
// 	name: 'counter',
// 	initialState,
// 	reducers: {
// 		// these function names will be used to dispatch an action, no need to create extra identifier to create an action type and separate the actions using if/switch statements
// 		increment(state) {
// 			state.counter++;
// 			// here it seems like we are mutating the original state, however redux-toolkit take cares of it in the background and doesn't mutate the original state, instead create a new state with updated value
// 		},
// 		decrement(state) {
// 			state.counter--;
// 		},
// 		incrementByPayload(state, action) {
// 			state.counter += action.payload;
// 		},
// 		decrementByPayload(state, action) {
// 			state.counter -= action.payload;
// 		},
// 		toggleCounter(state) {
// 			state.showCounter = !state.showCounter;
// 		},
// 	},
// });

// const store = configureStore({
// 	reducer: counterSlice.reducer,
// });

// export const counterActions = counterSlice.actions;

// export default store;
