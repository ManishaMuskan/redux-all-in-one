import classes from './../Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import { counterActions } from '../../store-redux-toolkit/index';
import { counterActions } from './../../store-redux-toolkit/counter-slice';

const CounterWithReduxToolkit = () => {
	// const counter = useSelector((state) => state.counter);
	// const showCounter = useSelector((state) => state.showCounter);

	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);

	const dispatch = useDispatch();

	const incrementCounterHandler = () => {
		dispatch(counterActions.increment());
	};

	const decrementCounterHandler = () => {
		dispatch(counterActions.decrement());
	};

	const incrementByPayloadCounterHandler = () => {
		dispatch(counterActions.incrementByPayload(15));
	};

	const decrementByPayloadCounterHandler = () => {
		dispatch(counterActions.decrementByPayload(10));
		// this is how we have dispatch action and pass payload which by redux toolkit be receieved as {type: SOME_UNIQUE_IDENTIFIER, payload: ARGUMENT_PASSED_HERE}
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && (
				<div>
					<div className={classes.value}>{counter}</div>
					<button type='button' onClick={incrementCounterHandler}>
						Increment
					</button>
					<button type='button' onClick={decrementCounterHandler}>
						Decrement
					</button>
					<button type='button' onClick={incrementByPayloadCounterHandler}>
						Increment by 15
					</button>
					<button type='button' onClick={decrementByPayloadCounterHandler}>
						Decrement by 10
					</button>
					<br />
					<br />
				</div>
			)}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default CounterWithReduxToolkit;
