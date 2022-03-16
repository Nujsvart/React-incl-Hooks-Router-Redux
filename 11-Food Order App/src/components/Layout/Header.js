import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";
import classes from "./header.module.css";

const Header = ({ setCartIsShown }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton setCartIsShown={setCartIsShown} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;
