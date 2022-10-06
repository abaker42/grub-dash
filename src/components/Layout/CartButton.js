import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './CartButton.module.css';

const CartButton = (props) => {
	const [btnBump, setBtnBump] = useState(false);
	const cartCtx = useContext(CartContext);
	const { items } = cartCtx;
	//reduce allows us to transform an array into a single number value
	const numberOfCartItems = items.reduce((currentNum, item) => {
		return currentNum + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${btnBump && classes.bump}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}

		setBtnBump(true);
		const timer = setTimeout(() => {
			setBtnBump(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>My Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default CartButton;
