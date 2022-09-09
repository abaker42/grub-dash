import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './CartButton.module.css';

const CartButton = (props) => {
	return (
		<button className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>My Cart</span>
			<span className={classes.badge}>4</span>
		</button>
	);
};

export default CartButton;
