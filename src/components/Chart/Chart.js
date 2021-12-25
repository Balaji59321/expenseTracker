import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValue = props.datapoint.map((ele) => ele.value);
  const maxValue = Math.max(...dataPointValue);
  console.log(maxValue);
  return (
    <div className="chart">
      {props.datapoint.map((ele) => (
        <ChartBar
          key={ele.label}
          val={ele.value}
          max={maxValue}
          label={ele.label}
        />
      ))}
    </div>
  );
};

export default Chart;
