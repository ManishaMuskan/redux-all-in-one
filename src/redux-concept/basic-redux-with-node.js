const redux = require('redux');

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
	//giving default value so that it doesn't take the initial state as undefined when the store is created
	if (action.type === 'INCREMENT') {
		return { counter: state.counter + 1 };
	}

	if (action.type === 'DECREMENT') {
		return { counter: state.counter - 1 };
	}

	return initialState;
};

//const store = redux.createStore(counterReducer, initialState); // this is one way to create store by providing initial state here.
const store = redux.createStore(counterReducer);

console.log('latest Object', store.getState()); // we can get the latest state by getState(), state is associated just after the store is created

const counterSubscriber = () => {
	// Subscriber fn, it will always run whenever any action is dispatched
	console.log('latest Object', store.getState());
};

store.subscribe(counterSubscriber); // it will be notified when the state updated and associated fn will be executed

store.dispatch({ type: 'INCREMENT' });
