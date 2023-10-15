import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
//import store from './store-react-redux/index';
import store from './store-redux-toolkit/index';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
