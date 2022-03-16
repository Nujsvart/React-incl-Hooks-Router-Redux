import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = con => {
    setIsEditing(con);
  };

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={startEditingHandler}
        />
      ) : (
        <button type="button" onClick={() => startEditingHandler(true)}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
