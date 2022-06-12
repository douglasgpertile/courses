import { FC, Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "assets/meals.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

interface Props {
  onShowCart: () => void;
}

const Header: FC<Props> = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table full of delicious food, hummmmm!!" />
      </div>
    </Fragment>
  );
};

export default Header;
