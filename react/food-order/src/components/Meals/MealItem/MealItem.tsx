import { FC } from "react";
import MealItemForm from "../MealItemForm/MealItemForm";
import classes from "./MealItem.module.css";

interface Props {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem: FC<Props> = ({ id, name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
