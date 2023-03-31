import { useCallback, useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvaiableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvaiableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [httpError, setHttpError] = useState(false);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://react-course-df8ff-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Somethin went wrong!");
      }
      const data = await response.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          description: data[key].description,
          name: data[key].name,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setHttpError(error);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (loading) {
    return (
      <section className={classes["meals-loading"]}>
        <p>Loading...</p>
      </section>
    );
  }
 
  if (httpError) {
    return (
      <section className={classes["meals-error"]}>
        <p>{httpError.message}</p>
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

export default AvaiableMeals;
