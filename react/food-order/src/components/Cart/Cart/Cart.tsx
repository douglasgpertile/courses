import { Modal } from "components/UI";
import { FC, MouseEventHandler } from "react";
import classes from "./Cart.module.css";

interface Props {
  onClose: () => void;
}

const Cart: FC<Props> = ({ onClose }) => {
  const cartItems = [{ id: "id", name: "sushi", amount: 2, price: 12.99 }].map(
    toCartItem
  );

  const closeHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <ul className={classes["cart-item"]}></ul>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

const toCartItem = (item: {
  id: string;
  name: string;
  amount: number;
  price: number;
}) => <li>{item.name}</li>;

export default Cart;
