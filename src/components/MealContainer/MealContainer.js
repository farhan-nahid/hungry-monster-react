import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MealDetails from "../MealDetails/MealDetails";
import SingleMeal from "../SingleMeal/SingleMeal";
import Spinner from "../Spinner/Spinner";
import "./MealContainer.css";

const MealContainer = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [searchValues, setSearchValues] = useState("");

  const handleClick = (meal) => {
    setSelectedMeals([...selectedMeals, meal]);
  };

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setSearchValues(e.target.value);
    }
  };

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => {
        setMeals(res.data.meals);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    if (searchValues) {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValues}`
        )
        .then((res) => {
          if (res.data.meals === null) {
            return toast.error("This Food is not Exist.");
          }
          setMeals(res.data.meals);
        })
        .catch((err) => toast.error(err.message));
    }
  }, [searchValues]);

  return (
    <main className="container">
      <section className="meal__search__container">
        <input
          type="text"
          id="meal__search__input"
          placeholder="Search for a Meal..."
          onChange={handleChange}
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
