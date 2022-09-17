import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		const updatedItems = state.items.concat(action.item);
		const newTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: newTotalAmount,
		};
	}
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemToCart = (item) => {
		dispatchCartAction({ type: 'ADD_ITEM', item: item });
	};

	const removeItemFromCart = (id) => {
		dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: 0,
		addItem: addItemToCart,
		removeItem: removeItemFromCart,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
