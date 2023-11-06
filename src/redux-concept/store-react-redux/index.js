import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: false };

const counterReducer = (state = initialState, action) => {
	if (action.type === 'INCREMENT') {
		return { ...state, counter: state.counter + 1 };
	}

	if (action.type === 'DECREMENT') {
		return {
			...state,
			counter: state.counter - 1,
		};
	}

	if (action.type === 'TOGGLE') {
		return { showCounter: !state.showCounter, counter: state.counter };
	}

	return state;
};

const store = createStore(counterReducer);

export default store;
