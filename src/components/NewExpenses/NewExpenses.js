import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpenses = (props) => {
  const [isEditing, SetIsEditing] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    SetIsEditing(false);
  };

  const startEditingHandler = () => {
    SetIsEditing(true);
  };

  const StopEditinghandler = () => {
    SetIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Expense </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={StopEditinghandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
