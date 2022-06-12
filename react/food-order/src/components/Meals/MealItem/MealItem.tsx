import { CartItemModel } from "models/CartItem";
import { FC, useContext } from "react";
import { CartContext } from "store/CartContext";
import MealItemForm from "../MealItemForm/MealItemForm";
import classes from "./MealItem.module.css";

type Props = Pick<CartItemModel, "id" | "name" | "price"> & {description: string};

const MealItem: FC<Props> = ({ id, name, description, price }) => {
  const cartContext = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;
  
  const submitHandler = (amount: number) => {
    cartContext.addItem({id, name, price, amount});
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onSubmit={submitHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
