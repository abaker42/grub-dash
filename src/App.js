import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
	const [showCart, setShowCart] = useState(false);

	const handleShowCart = () => {
		setShowCart(true);
	};

	const hideCart = () => {
		setShowCart(false);
	};
	return (
		<CartProvider>
			{showCart && <Cart onHideCart={hideCart} />}
			<Header onShowCart={handleShowCart} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
