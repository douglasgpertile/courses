import "./Expense.css";

import { ExpenseModel } from "../../../Models";
import { Card } from "../../UI";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

type ExpensesProps = {
  items: Array<ExpenseModel>;
};

const Expenses = (props: ExpensesProps) => {
  const [filteredYear, setYear] = useState(new Date().getFullYear());

  const filterHandler = (year: number) => {
    console.log(year);
    setYear(year);
  };

  const filteredItems = props.items.filter(
    (e) => e.date.getFullYear() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onFilter={filterHandler} />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
};

export default Expenses;
