import React from "react";
import spinner from "../../images/spinner.gif";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="loading__spinner">
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Spinner;
