import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCart, sendCartData } from './store/cart-actions';

let isInitial = true;
function SimpleEcartWithReduxApp() {
	const showCart = useSelector((state) => state.ui.showCart);
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.notification);
	const dispatch = useDispatch();

	// const getAllProductsHandler = useCallback(
	// 	(products) => {
	// 		dispatch(productsActions.getAllProducts({ products }));
	// 	},
	// 	[dispatch]
	// );

	// const getAllCartItemsHandler = useCallback(
	// 	(cartItems) => {
	// 		dispatch(cartActions.getAllCartItems({ cartItems }));
	// 	},
	// 	[dispatch]
	// );

	// useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		const response = await fetch('/api/products');
	// 		const data = await response.json();
	// 		getAllProductsHandler(data.products);
	// 	};

	// 	const fetchCartItems = async () => {
	// 		const response = await fetch('/api/cart-items');
	// 		const data = await response.json();
	// 		getAllCartItemsHandler(data.cart.items);
	// 	};
	// 	fetchProducts();
	// 	fetchCartItems();
	// }, [getAllProductsHandler, getAllCartItemsHandler]);

	// useEffect(() => {
	// 	fetch('/api/cart-item', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			id: 1,
	// 			title: 'product 1',
	// 			price: 6,
	// 			quantity: 1,
	// 			total: 6,
	// 			description: 'This is a first product - amazing!',
	// 		}),
	// 	});
	// }, []);

	useEffect(() => {
		dispatch(fetchCart());
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}

		if (cart.changed) {
			dispatch(sendCartData(cart)); //dispatching from action creator
		}
	}, [cart, dispatch]);

	return (
		<>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default SimpleEcartWithReduxApp;
