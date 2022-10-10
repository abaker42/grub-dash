import React, { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const badZip = (value) => value.trim().length !== 5;

const Checkout = (props) => {
	const [validFormInputs, setValidFormInputs] = useState({
		name: true,
		street: true,
		city: true,
		zip: true,
	});

	//grabbing user input with useRef since I'm not too concerned with user validation experience
	const nameInput = useRef();
	const streetInput = useRef();
	const zipInput = useRef();
	const cityInput = useRef();

	const confirmOrder = (event) => {
		event.preventDefault();

		const enteredName = nameInput.current.value;
		const enteredStreet = streetInput.current.value;
		const enteredZip = zipInput.current.value;
		const enteredCity = cityInput.current.value;

		setValidFormInputs({
			name: !isEmpty(enteredName),
			street: !isEmpty(enteredStreet),
			city: !isEmpty(enteredCity),
			zip: !badZip(enteredZip),
		});

		const formIsValid =
			!badZip(enteredZip) &&
			!isEmpty(enteredStreet) &&
			!isEmpty(enteredName) &&
			!isEmpty(enteredCity);

		if (!formIsValid) {
			return;
		}
		//submit cart data
		props.onSubmitToServer({
			name: enteredName,
			street: enteredStreet,
			city: enteredCity,
			zip: enteredZip,
		});
	};

	return (
		<form className={classes.form} onSubmit={confirmOrder}>
			<div
				className={`${classes.control} ${
					validFormInputs.name ? '' : classes.invalid
				}`}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' ref={nameInput} />
				{!validFormInputs.name && <p>Please enter a valid name</p>}
			</div>
			<div
				className={`${classes.control} ${
					validFormInputs.street ? '' : classes.invalid
				}`}>
				<label htmlFor='street'>Street</label>
				<input type='text' id='street' ref={streetInput} />
				{!validFormInputs.street && <p>Please enter a valid street</p>}
			</div>
			<div
				className={`${classes.control} ${
					validFormInputs.zip ? '' : classes.invalid
				}`}>
				<label htmlFor='zip'>Zip Code</label>
				<input type='text' id='zip' ref={zipInput} />
				{!validFormInputs.zip && <p>Please enter a valid zip</p>}
			</div>
			<div
				className={`${classes.control} ${
					validFormInputs.city ? '' : classes.invalid
				}`}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' ref={cityInput} />
				{!validFormInputs.city && <p>Please enter a valid city</p>}
			</div>
			<div className={classes.actions}>
				<button type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
