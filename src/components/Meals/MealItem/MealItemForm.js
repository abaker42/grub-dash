import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
	const [validFlag, setValidFlag] = useState(true);

	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		// amountInputRef.current.value is always a string the + converts to number type
		const enteredAmount = amountInputRef.current.value;
		const amountNumber = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			amountNumber < 1 ||
			amountNumber > 5
		) {
			setValidFlag(false);
			return;
		}

		props.onAddToCart(amountNumber);
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label='Amount '
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+ Add</button>
			{!validFlag && <p>Please entere a valid amount 1-5</p>}
		</form>
	);
};

export default MealItemForm;
