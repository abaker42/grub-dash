import React, { Fragment } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
	return (
		<Fragment>
			<Cart />
			<Header />
			<main>
				<Meals />
			</main>
		</Fragment>
	);
}

export default App;
