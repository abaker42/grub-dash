import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(
				'https://react-http-30b70-default-rtdb.firebaseio.com/meals.json'
			);
			const responseData = await response.json();

			//transform data object from firebase to an array
			const loadedMeals = [];

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					descr: responseData[key].descr,
					price: responseData[key].price,
				});
			}

			setMeals(loadedMeals);
		};
		fetchMeals();
	}, []);
	const mealsList = meals.map((meal) => (
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
