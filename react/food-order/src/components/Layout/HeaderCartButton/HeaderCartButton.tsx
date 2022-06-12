import { CartIcon } from "components/Cart";
import { FC, MouseEventHandler } from "react";
import classes from "./HeaderCartButton.module.css";

interface Props {
  onClick: () => void;
}

const HeaderCartButton: FC<Props> = ({ onClick }) => {
  const clickHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  return (
    <button onClick={clickHandler} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
