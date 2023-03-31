import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const cancelHandler = () => {
    setIsEditing(false);
  };

  let content = (
    <button type="button" onClick={startEditingHandler}>
      Add New Expense
    </button>
  );

  if (isEditing) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      ></ExpenseForm>
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
