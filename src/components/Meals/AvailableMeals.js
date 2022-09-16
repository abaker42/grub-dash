import React from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Sushi',
		description: 'Raw fish with avacado and cucumber',
		price: 22.99,
	},
	{
		id: 'm2',
		name: 'Burger',
		description: 'American classic with all the fixins',
		price: 12.99,
	},
	{
		id: 'm2',
		name: 'Steak',
		description: 'Try this prime cut with our special steak sauce',
		price: 29.99,
	},
	{
		id: 'm3',
		name: 'Shrimp',
		description: '8 Collossal prawns served with lemon butter',
		price: 24.99,
	},
	{
		id: 'm4',
		name: 'Pasta',
		description: 'You choose your protein with white or red sauce',
		price: 18.99,
	},
	{
		id: 'm5',
		name: 'Salad',
		description: 'Homegrown vegetables with your choice of dressing',
		price: 14.99,
	},
];

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
