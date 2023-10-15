import { Component } from 'react';
import classes from './Counter.module.css';
import { connect } from 'react-redux';

class CounterWithClass extends Component {
	incrementCounterHandler = () => {
		this.props.increment();
	};

	decrementCounterHandler = () => {
		this.props.decrement();
	};

	toggleCounterHandler = () => {
		this.props.toggleCounter();
	};

	render() {
		return (
			<main className={classes.counter}>
				<h1>Redux Counter</h1>
				{/* {this.props.showCounter && */}
				<div>
					<div className={classes.value}>
						{this.props.counter}
						{this.props.showCounter}
					</div>
					<button
						type='button'
						onClick={this.incrementCounterHandler.bind(this)}>
						Increment
					</button>
					<button
						type='button'
						onClick={this.decrementCounterHandler.bind(this)}>
						Decrement
					</button>
					<br />
					<br />
				</div>
				{/* } */}
				<button onClick={this.toggleCounterHandler.bind(this)}>
					Toggle Counter
				</button>
			</main>
		);
	}
}

const initialState = { counter: 0, showCounter: false };

const mapStateToProps = (state = initialState, action) => {
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

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch({ type: 'INCREMENT' }),
		decrement: () => dispatch({ type: 'DECREMENT' }),
		toggleCounter: () => dispatch({ type: 'TOGGLE' }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterWithClass);
