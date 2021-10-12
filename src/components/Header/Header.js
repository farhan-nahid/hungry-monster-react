import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <ul className="navbar__logo">
          <li>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </li>
        </ul>

        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu__button">
          <i className="fas fa-bars"></i>
        </label>

        <ul className="nav__items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Recipes</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
