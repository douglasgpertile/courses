import { Modal } from "components/UI";
import { CartItemModel } from "models/CartItem";
import { FC, MouseEventHandler, useContext } from "react";
import { CartContext } from "store/CartContext";
import CartItem from "../CartItem/CartItem";
import classes from "./Cart.module.css";

interface Props {
  onClose: () => void;
}

const Cart: FC<Props> = ({ onClose }) => {
  const cartContext = useContext(CartContext);

  const clickHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    onClose();
  };

  const addItemHandler = (item: CartItemModel) => {
    cartContext.addItem(item);
  };
  
  const removeItemHandler = (id: string) => {
    cartContext.removeItem(id);
  };

  const cartItems = cartContext.itens.map(i => (
    <CartItem 
      key={i.id}
      item={i}
      onAdd={addItemHandler}
      onRemove={removeItemHandler}
    />
  ));

  return (
    <Modal onClose={onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartContext.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={clickHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
