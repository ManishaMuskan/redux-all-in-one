// import Counter from './components/Counter';
//import CounterWithClass from './components/CounterWithClass';

import { useSelector } from 'react-redux';
import Header from './components/use-redux-toolkit/Header';
import Userprofile from './components/use-redux-toolkit/UserProfile';
import Auth from './components/use-redux-toolkit/Auth';
import CounterWithReduxToolkit from './components/use-redux-toolkit/CounterWithReduxToolkit';

function App() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<>
			<Header />
			{!isAuthenticated && <Auth />}
			{isAuthenticated && <Userprofile />}
			{isAuthenticated && <CounterWithReduxToolkit />}
			{/* <Counter /> */}
			{/* <CounterWithClass /> */}
		</>
	);
}

export default App;
