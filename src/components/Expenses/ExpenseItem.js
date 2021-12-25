import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "../Expenses/ExpenseItem.css";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
    props.delHandler(props.id);
  };
  // console.log(props.year);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{"$" + props.amount}</div>
      </div>
      <button onClick={clickHandler}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
