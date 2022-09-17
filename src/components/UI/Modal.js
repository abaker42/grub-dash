import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const portLocation = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<BackDrop onHideCart={props.onHideCart} />,
				portLocation
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portLocation
			)}
		</Fragment>
	);
};

export default Modal;
