import React from "react";
import "./MealDetails.css";

const MealDetails = ({ selectedMeals }) => {
  return (
    <div className="meal__details">
      <h6>Clicked Cards: {selectedMeals.length}</h6>
      <ol>
        {
          // map selected meals
          selectedMeals.map((meal, idx) => (
            <li key={idx}>
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
