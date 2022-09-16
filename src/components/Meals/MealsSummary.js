import React from 'react';

import classes from './MealsSummary.module.css';

const MealsSummary = () => {
	return (
		<section className={classes.summary}>
			<h2>Delicious Grub, Delivered in a Dash</h2>
			<p>
				Choose a meal from our menu. Our menu rotates every month with special
				menu items available for pre order.
			</p>
			<p>
				Our food is made from high quality prepared on order by our experienced
				chefs!
			</p>
		</section>
	);
};

export default MealsSummary;
