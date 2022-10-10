import React, { useContext } from 'react';
import { useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const cartCtx = useContext(CartContext);
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const handleRemoveItem = (id) => {
		cartCtx.removeItem(id);
	};

	const handleAddItem = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const handleOrder = () => {
		setIsCheckout(true);
	};

	const submitToServer = (userData) => {
		fetch('https://react-http-30b70-default-rtdb.firebaseio.com/orders.json', {
			method: 'POST',
			body: JSON.stringify({
				user: userData,
				cart: cartCtx.items,
			}),
		});
	};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={handleRemoveItem.bind(null, item.id)}
					onAdd={handleAddItem.bind(null, item)}
				/>
			))}
		</ul>
	);

	const modalActions = (
		<div className={classes.actions}>
			<button className={classes['button--alt']} onClick={props.onHideCart}>
				Close
			</button>
			{hasItems && (
				<button className={classes.button} onClick={handleOrder}>
					Order
				</button>
			)}
		</div>
	);

	return (
		<Modal onHideCart={props.onHideCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && (
				<Checkout
					onSubmitToServer={submitToServer}
					onCancel={props.onHideCart}
				/>
			)}
			{!isCheckout && modalActions}
		</Modal>
	);
};

export default Cart;
