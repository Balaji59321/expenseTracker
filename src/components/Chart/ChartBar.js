import "./ChartBar.css";

const ChartBar = (props) => {
  let fill;
  if (props.max > 0) {
    fill = (props.val / props.max) * 10 + "rem";
    console.log(fill);
  }
  return (
    <div className="chart_bar">
      <div className="bar">
        <div className="fill" style={{ height: fill }}></div>
      </div>
      <div className="text">{props.label}</div>
    </div>
  );
};

export default ChartBar;
