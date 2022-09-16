import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = (props) => {
	<div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
	<div className={classes.modal}>
		<div className={classes.content}>{props.children}</div>
	</div>;
};

const portLocation = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<BackDrop />, portLocation)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portLocation
			)}
		</Fragment>
	);
};

export default Modal;
