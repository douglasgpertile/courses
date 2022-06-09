import ChartBar from "../ChartBar/ChartBar";
import "./Chart.css";

interface Props {
  dataPoints: Array<{
    label: string;
    value: number;
  }>;
}

const Chart: React.FC<Props> = (props) => {
  const max = Math.max(...props.dataPoints.map((p) => p.value));

  return (
    <div className="chart">
      {props.dataPoints.map((p) => (
        <ChartBar key={p.label} label={p.label} value={p.value} max={max} />
      ))}
    </div>
  );
};

export default Chart;
