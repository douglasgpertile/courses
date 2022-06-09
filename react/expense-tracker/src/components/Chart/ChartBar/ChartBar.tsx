import "./ChartBar.css";

interface Props {
  label: string;
  value: number;
  max: number;
}

const ChartBar: React.FC<Props> = (props) => {
  const heightPercentage =
    props.max > 0 ? Math.round((props.value / props.max) * 100) : 0;

  const style = {
    height: `${heightPercentage}%`,
  };

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={style}></div>
      </div>
      <div className="char-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
