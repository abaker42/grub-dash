import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		const newTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		const cartItemExists = state.items.findIndex(
			(item) => item.id === action.item.id
		);

		const existingItem = state.items[cartItemExists];
		let updatedItems;

		if (existingItem) {
			const updatedItem = {
				...existingItem,
				amount: existingItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[cartItemExists] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: newTotalAmount,
		};
	}

	if (action.type === 'REMOVE_ITEM') {
		const cartItemExists = state.items.findIndex(
			(item) => item.id === action.id
		);
		const existingItem = state.items[cartItemExists];
		const newTotalAmount = state.totalAmount - existingItem.price;
		let updatedItems;
		if (existingItem.amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			const updatedItem = {
				...existingItem,
				amount: existingItem.amount - 1,
			};
			updatedItems = [...state.items];
			updatedItems[cartItemExists] = updatedItem;
		}
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
		totalAmount: cartState.totalAmount,
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
