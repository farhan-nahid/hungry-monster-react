import axios from "axios";
import React, { useEffect, useState } from "react";
import MealDetails from "../MealDetails/MealDetails";
import SingleMeal from "../SingleMeal/SingleMeal";
import Spinner from "../Spinner/Spinner";
import "./MealContainer.css";

const MealContainer = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const handleClick = (meal) => {
    setSelectedMeals([...selectedMeals, meal]);
  };

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => {
        // console.log(res.data);
        setMeals(res.data.meals);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <main className="container">
      <section className="meal__search__container">
        <input
          type="text"
          id="meal__search__input"
          placeholder="Search for a Meal..."
        />
        <button id="meal__search__button">Search</button>
      </section>
      <section className="main__container">
        <div className="meal__container">
          {
            // map meals
            meals.length > 0 ? (
              meals.map((meal) => (
                <SingleMeal
                  key={meal.idMeal}
                  meal={meal}
                  handleClick={handleClick}
                />
              ))
            ) : (
              <Spinner />
            )
          }
        </div>

        <div>
          <MealDetails selectedMeals={selectedMeals} />
        </div>
      </section>
    </main>
  );
};

export default MealContainer;
