import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import CartButton from './CartButton';
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>GrubDash</h1>
				<CartButton onClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt='Feast all day!' />
			</div>
		</Fragment>
	);
};

export default Header;
