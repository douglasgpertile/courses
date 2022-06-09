import { ChangeEventHandler, FormEvent, useRef, useState } from "react";
import { ExpenseModel } from "../../../Models";
import "./ExpenseForm.css";

interface ExpenseFormProps {
  onSubmit: (expense: ExpenseModel) => void;
  onCancel: () => void;
}

const ExpenseForm = (props: ExpenseFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const expenseItem: ExpenseModel = {
      title: titleRef.current?.value ?? "",
      amount: Number.parseFloat(amountRef.current?.value ?? "0"),
      date: new Date(dateRef.current?.value ?? ""),
    };

    props.onSubmit(expenseItem);

    clearInputs();
  };

  const clearInputs = () => {
    if (titleRef.current?.value) titleRef.current.value = "";
    if (amountRef.current?.value) amountRef.current.value = "";
    if (dateRef.current?.value) dateRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" ref={titleRef} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" ref={amountRef} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" ref={dateRef} />
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
