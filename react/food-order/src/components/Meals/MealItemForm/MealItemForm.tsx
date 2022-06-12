import { Control } from "components/UI";
import { FC, FormEventHandler, useRef, useState } from "react";
import classes from "./MealItemForm.module.css";

interface Props {
  id: string;
  onSubmit: (amount: number) => void
}

const MealItemForm: FC<Props> = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault(); 
    e.stopPropagation();

    const amount = amountInputRef.current?.value ? Number.parseInt(amountInputRef.current.value) : 0;
    
    if (
      !amountInputRef.current?.value || 
      amountInputRef.current?.value.trim().length === 0 ||
      amount < 1 ||
      amount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onSubmit(amount);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
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
        ref={amountInputRef}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
