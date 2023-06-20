import { useState } from 'react';
import { Chart } from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import cx from 'classnames';
import { BarChart } from '../BarChart';
import { Card } from '../Card';

Chart.register(CategoryScale);

const chartData = {
  labels: [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55],
      barThickness: 20,
      backgroundColor: 'rgba(129, 140, 248, 0.75)',
    },
  ],
};

interface TypeButtonProp {
  title: string;
  onClick(): void;
  selected: boolean;
}

const TypeButton = ({ title, onClick, selected }: TypeButtonProp) => {
  return (
    <button
      className={cx(
        'py-1 px-2 box-border bg-zinc-800 text-xs text-slate-500 rounded border border-slate-800 hover:border-slate-400',
        { 'bg-indigo-500 !text-white': selected }
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export const SessionActivity = () => {
  const [type, setType] = useState('day');

  const handleTypeClick = (type: string) => {
    setType(type);
  };

  return (
    <Card>
      <div className='flex justify-between'>
        <p className='text-4xl'>Session Activity</p>

        <div className='flex gap-5 items-center'>
          <TypeButton
            title='1D'
            selected={type === 'day'}
            onClick={() => handleTypeClick('day')}
          />
          <TypeButton
            title='1M'
            selected={type === 'month'}
            onClick={() => handleTypeClick('month')}
          />
          <TypeButton
            title='1Y'
            selected={type === 'year'}
            onClick={() => handleTypeClick('year')}
          />
        </div>
      </div>

      <div className='pt-5 h-80'>
        <BarChart data={chartData} />
      </div>
    </Card>
  );
};
