import { useState } from "react";
import { ExpenseModel } from "../../../Models";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

interface NewExpenseProps {
  onAddExpense: (expense: ExpenseModel) => void;
}

const NewExpense = (props: NewExpenseProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const submitExpenseFormHandler = (model: ExpenseModel) => {
    const data = { ...model, id: Math.random().toString() };
    props.onAddExpense(data);
    setIsEditing(false);
  };

  const cancelExpenseFormHandler = () => setIsEditing(false);

  const addNewExpenseHandler = () => setIsEditing(true);

  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onSubmit={submitExpenseFormHandler}
          onCancel={cancelExpenseFormHandler}
        />
      )}
      {!isEditing && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
