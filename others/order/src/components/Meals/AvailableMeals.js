import { useEffect, useState } from 'react';

import Card from "../UI/Card";
import MealItem from "./Mealitem/MealItem";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    // useEffect() 안에 화살표 함수는 promise를 반환할 수 없다
    // 따라서 nested function을 이용하면 async - await 기술을 이용할 수 있다
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-http-4040a-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
            
            if (!response.ok) {
                throw new Error('Something wet wrong!');
            }
            
            const responseData = await response.json();

            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        };

        // async 함수 내에서 error는 거절된다 (await이 없기 때문)
        // 따라서 try-catch를 사용할 수 없다
        // try {
        //     fetchMeals();
        // } catch (error) {
        //     setIsLoading(false);
        //     setHttpError(error.message);
        // }
        // the traditional promise only way of handling an error inside of a promise
        fetchMeals().catch((error => {
            setIsLoading(false);
            setHttpError(error.message);
        }));

    }, []);

    const mealsList = meals.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        );
    }

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
