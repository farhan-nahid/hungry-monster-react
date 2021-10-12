import React from "react";
import "./MealContainer.css";

const MealContainer = () => {
  return (
    <main>
      <section class="meal__search__container">
        <input
          type="text"
          id="meal__search__input"
          placeholder="Search for a Meal..."
        />
        <button id="meal__search__button">Search</button>
      </section>
    </main>
  );
};

export default MealContainer;
