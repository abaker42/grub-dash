import React, { Fragment, useContext } from 'react';
import { useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmitting, setDidSubmitting] = useState(false);
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

	const submitToServer = async (userData) => {
		setIsSubmitting(true);
		const resp = await fetch(
			'https://react-http-30b70-default-rtdb.firebaseio.com/orders.json',
			{
				method: 'POST',
				body: JSON.stringify({
					user: userData,
					cart: cartCtx.items,
				}),
			}
		);

		if (resp.ok) {
			setIsSubmitting(false);
			setDidSubmitting(true);
			cartCtx.clearCart();
		}
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

	const cartModalContent = (
		<Fragment>
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
		</Fragment>
	);

	const isSubmittingContent = (
		<Fragment>
			<p>Submitting Order....</p>
		</Fragment>
	);

	const didSumbitContent = (
		<Fragment>
			<p>Thank you for your order Name Here!</p>
			<div className={classes.actions}>
				<button className={classes.button} onClick={props.onHideCart}>
					Close
				</button>
			</div>
		</Fragment>
	);

	return (
		<Modal onHideCart={props.onHideCart}>
			{isSubmitting && isSubmittingContent}
			{!isSubmitting && !didSubmitting && cartModalContent}
			{didSubmitting && didSumbitContent}
		</Modal>
	);
};

export default Cart;
