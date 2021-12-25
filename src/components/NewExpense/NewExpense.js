import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [click, setClicked] = useState(false);

  const dataHandler = (enterdValue) => {
    const expenseData = { ...enterdValue, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setClicked(false);
  };

  const clickHandler = () => {
    setClicked(true);
  };

  return (
    <div
      style={{
        backgroundColor: "#50004d",
        padding: "1rem 0",
        margin: "1rem 0",
      }}
    >
      {!click && <button onClick={clickHandler}>+ Add new Expense</button>}
      {click && <ExpenseForm onSubmitGetData={dataHandler} />}
    </div>
  );
};

export default NewExpense;
