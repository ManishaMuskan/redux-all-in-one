import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.showCounter);
	const dispatch = useDispatch();

	const incrementCounterHandler = () => {
		dispatch({ type: 'INCREMENT' });
	};

	const decmentCounterHandler = () => {
		dispatch({ type: 'DECREMENT' });
	};

	const toggleCounterHandler = () => {
		dispatch({ type: 'TOGGLE' });
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
					<button type='button' onClick={decmentCounterHandler}>
						Decrement
					</button>
					<br />
					<br />
				</div>
			)}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
