import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './CartButton.module.css';

const CartButton = (props) => {
	const cartCtx = useContext(CartContext);
	//reduce allows us to transform an array into a single number value
	const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
		return currentNum + item.amount;
	}, 0);
	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>My Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default CartButton;
