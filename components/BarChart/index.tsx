import { Bar } from 'react-chartjs-2';
import { ChartData } from 'chart.js';

interface BarChartProps {
  data: ChartData<'bar'>;
}

export const BarChart = ({ data }: BarChartProps) => {
  return (
    <Bar
      data={data}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
};
