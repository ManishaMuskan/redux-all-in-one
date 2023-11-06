import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
//import store from './redux-concept/store-react-redux/index';
//import store from './redux-concept/store-redux-toolkit/index';
import store from './simple-ecart-with-redux/store/index';

import './index.css';
import App from './App';
// import { makeServer } from './server';

// if (process.env.NODE_ENV === 'development') {
// 	makeServer({ environment: 'development' });
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
