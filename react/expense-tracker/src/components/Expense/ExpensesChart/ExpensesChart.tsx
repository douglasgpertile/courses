import { ExpenseModel } from "../../../Models";
import { Chart } from "../../Chart";

interface Props {
  expenses: Array<ExpenseModel>;
}

const ExpensesChart: React.FC<Props> = (props) => {
  const dataPoints: Array<{ label: string; value: number }> = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (let expense of props.expenses) {
    const month = expense.date.getMonth();
    dataPoints[month].value += expense.amount;
  }

  console.log(dataPoints);

  return <Chart dataPoints={dataPoints} />;
};

export default ExpensesChart;
