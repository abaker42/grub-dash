import React from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Sushi',
		descr: 'Raw fish with avacado and cucumber',
		price: 22.7987,
	},
	{
		id: 'm2',
		name: 'Burger',
		descr: 'American classic with all the fixins',
		price: 12.99,
	},
	{
		id: 'm6',
		name: 'Steak',
		descr: 'Try this prime cut with our special steak sauce',
		price: 29.288,
	},
	{
		id: 'm3',
		name: 'Shrimp',
		descr: '8 Collossal prawns served with lemon butter',
		price: 24.5,
	},
	{
		id: 'm4',
		name: 'Pasta',
		descr: 'You choose your protein with white or red sauce',
		price: 18.0,
	},
	{
		id: 'm5',
		name: 'Salad',
		descr: 'Homegrown vegetables with your choice of dressing',
		price: 14.99,
	},
];

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			id={meal.id}
			key={meal.id}
			name={meal.name}
			descr={meal.descr}
			price={meal.price}
		/>
	));
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
