import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

const notify = (dispatch, status, title, message) => {
	dispatch(
		uiActions.showNotification({
			status,
			title,
			message,
		})
	);
	setTimeout(() => {
		dispatch(uiActions.hideNotification());
	}, 2000);
};

// this is redux thunk (a customised action creator) which returns the function
export const sendCartData = (cart) => {
	return async (dispatch) => {
		const sendRequest = async (cart) => {
			const response = await fetch(
				'https://react-concept-sample-default-rtdb.firebaseio.com/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify(cart),
				}
			);

			if (!response.ok) {
				throw new Error('Some error occurred!');
			}
			notify(dispatch, 'success', 'Success', 'Request sent successfully!');
		};

		try {
			notify(dispatch, 'pending', 'Sending...', 'Sending Request!');
			await sendRequest({ items: cart.items, totalItems: cart.totalItems });
		} catch (error) {
			notify(dispatch, 'error', 'Error', error.message);
		}
	};
};

export const fetchCart = () => {
	return async (dispatch) => {
		const sendRequest = async () => {
			const response = await fetch(
				'https://react-concept-sample-default-rtdb.firebaseio.com/cart.json'
			);

			if (!response.ok) {
				throw new Error("Could't fetch the data!");
			}

			const data = await response.json();
			return data;
		};

		try {
			const data = await sendRequest();

			dispatch(
				cartActions.replaceCart({
					items: data.items || [],
					totalItems: data.totalItems,
				})
			);
		} catch (error) {
			notify(dispatch, 'error', 'Error', error.message);
		}
	};
};
