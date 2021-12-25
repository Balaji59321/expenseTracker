import "./App.css";
import React, { useState } from "react";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Chart from "./components/Chart/Chart";
import ExpenseChart from "./components/Expenses/ExpenseChart";
const App = () => {
  const [year, selectedYear] = useState("2020");
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "News Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 8, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpenseData = (data) => {
    // console.log("inside app");
    console.log(data);
    setExpenses((prevState) => {
      return [data, ...prevState];
    });
  };

  const yearHandler = (val) => {
    selectedYear(val);
  };

  const deleteHandler = (value) => {
    setExpenses(() => expenses.filter((ele) => ele.id !== value));
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseData} />
      <ExpenseFilter year={yearHandler} defaultYear={year} />
      <ExpenseChart
        expense={expenses.filter((value) => {
          return value.date.getFullYear().toString() === year;
        })}
      />
      {expenses
        .filter((value) => {
          return value.date.getFullYear().toString() === year;
        })
        .map((val) => {
          return (
            <ExpenseItem
              key={val.id}
              id={val.id}
              title={val.title}
              amount={val.amount}
              date={val.date}
              delHandler={deleteHandler}
            />
          );
        })}
    </div>
  );
};

export default App;
