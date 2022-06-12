import { CartIcon } from "components/Cart";
import { FC, MouseEventHandler, useContext, useEffect, useState } from "react";
import { CartContext } from "store/CartContext";
import classes from "./HeaderCartButton.module.css";

interface Props {
  onClick: () => void;
}

const HeaderCartButton: FC<Props> = ({ onClick }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { itens } = useContext(CartContext);

  useEffect(() => {
    if (itens.length === 0) return;
    setIsHighlighted(true);
    const timer = setTimeout(() => setIsHighlighted(false), 300);

    return () => clearTimeout(timer);
  }, [itens])
  
  const clickHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  const numberOfItems = itens.reduce((pre, curr) => pre + curr.amount, 0);
  const btnClasses = `${classes.button} ${isHighlighted ? classes.bump : ''}`;
  return (
    <button onClick={clickHandler} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
