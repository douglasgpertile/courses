import { Control } from "components/UI";
import { FC } from "react";
import classes from "./MealItemForm.module.css";

interface Props {
  id: string;
}

const MealItemForm: FC<Props> = (props) => {
  return (
    <form className={classes.form}>
      <Control
        label="Amount"
        control={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
