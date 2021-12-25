import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const month = [
    { label: "January", value: 0 },
    { label: "February", value: 0 },
    { label: "March", value: 0 },
    { label: "April", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "August", value: 0 },
    { label: "September", value: 0 },
    { label: "October", value: 0 },
    { label: "November", value: 0 },
    { label: "December", value: 0 },
  ];

  for (const expense in props.expense) {
    month[props.expense[expense].date.getMonth()].value +=
      props.expense[expense].amount;
  }
  return <Chart datapoint={month} />;
};

export default ExpenseChart;
