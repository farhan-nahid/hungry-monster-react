import React from "react";
import "./MealDetails.css";

const MealDetails = ({ selectedMeals }) => {
  console.log(selectedMeals);
  return (
    <div className="meal__details">
      <h6>Meal Details</h6>
      <ol>
        {
          // map selected meals
          selectedMeals.map((meal) => (
            <li key={meal.idMeal}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h6>{meal.strMeal}</h6>
            </li>
          ))
        }
      </ol>
    </div>
  );
};

export default MealDetails;
