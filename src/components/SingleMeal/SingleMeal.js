import React from "react";
import "./SingleMeal.css";

const SingleMeal = ({ meal, handleClick }) => {
  const { strMealThumb, strMeal } = meal;

  return (
    <div className="meal__card" onClick={() => handleClick(meal)}>
      <img src={strMealThumb} alt={strMeal} />
      <h4>{strMeal}</h4>
    </div>
  );
};

export default SingleMeal;
