import { ChangeEvent } from "react";
import "./ExpensesFilter.css";

interface Props {
  onFilter: (year: number) => void;
  selected: number;
}

const ExpenseFilter = (props: Props) => {
  const selectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = Number.parseInt(e.target.value);
    props.onFilter(value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
