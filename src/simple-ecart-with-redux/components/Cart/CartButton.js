import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
	const totalItems = useSelector((state) => state.cart.totalItems);
	const dispatch = useDispatch();

	const toggleCartHandler = (event) => {
		event.preventDefault();
		dispatch(uiActions.toggleCart());
	};

	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalItems}</span>
		</button>
	);
};

export default CartButton;
