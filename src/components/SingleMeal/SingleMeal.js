import React from "react";
import "./SingleMeal.css";

const SingleMeal = ({ meal: { strMealThumb, strMeal } }) => {
  return (
    <div className="meal__card">
      <img src={strMealThumb} alt={strMeal} />
      <h4>{strMeal}</h4>
    </div>
  );
};

export default SingleMeal;
