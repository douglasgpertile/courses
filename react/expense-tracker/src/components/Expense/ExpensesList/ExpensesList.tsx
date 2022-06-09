import React from "react";
import { ExpenseModel } from "../../../Models";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

interface Props {
  items: Array<ExpenseModel>;
}

const ExpensesList: React.FC<Props> = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((e) => (
        <ExpenseItem
          title={e.title}
          amount={e.amount}
          date={e.date}
          key={e.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
