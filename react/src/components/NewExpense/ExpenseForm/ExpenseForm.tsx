import { ChangeEventHandler, FormEvent, useState } from "react";
import { ExpenseModel } from "../../../Models";
import "./ExpenseForm.css";

interface ExpenseFormProps {
  onSubmit: (expense: ExpenseModel) => void;
  onCancel: () => void;
}

const ExpenseForm = (props: ExpenseFormProps) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitle(e.currentTarget.value);

  const amountChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) =>
    setAmount(e.currentTarget.value);

  const dateChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) =>
    setDate(e.currentTarget.value);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const expenseItem: ExpenseModel = {
      title,
      amount: Number.parseFloat(amount),
      date: new Date(date),
    };

    props.onSubmit(expenseItem);

    clearInputs();
  };

  const clearInputs = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
