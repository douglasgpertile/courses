import { Card } from "../../UI";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

interface Props {
  key?: string;
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem = (props: Props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
