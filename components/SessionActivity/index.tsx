import { useCallback, useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import cx from 'classnames';
import {
  SessionActivityData,
  SessionActivityType,
} from '@/pages/api/sessions/activity';
import { BarChart } from '../BarChart';
import { Card } from '../Card';
import { Loader } from '../Loader';

Chart.register(CategoryScale);

const labels = [
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
];

const datasets = {
  barThickness: 20,
  backgroundColor: 'rgba(129, 140, 248, 0.75)',
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
        { '!bg-indigo-500 !text-white': selected }
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export const SessionActivity = () => {
  const [type, setType] = useState<SessionActivityType>(
    SessionActivityType.YEAR
  );
  const [activities, setActivities] = useState<SessionActivityData>([]);

  const chartData = {
    labels,
    datasets: [
      {
        ...datasets,
        data: activities,
      },
    ],
  };

  const fetchSessionActivity = useCallback(async () => {
    const activitiesRes = await fetch(`/api/sessions/activity?type=${type}`);
    const parsedActivities = await activitiesRes.json();

    setActivities(parsedActivities);
  }, [type]);

  const handleTypeClick = (type: SessionActivityType) => {
    setType(type);
  };

  useEffect(() => {
    fetchSessionActivity();
  }, [fetchSessionActivity, type]);

  return (
    <Card>
      <div className='flex justify-between'>
        <p className='text-4xl'>Session Activity</p>

        <div className='flex gap-5 items-center'>
          <TypeButton
            title='1D'
            selected={type === SessionActivityType.DAY}
            onClick={() => handleTypeClick(SessionActivityType.DAY)}
          />
          <TypeButton
            title='1M'
            selected={type === SessionActivityType.MONTH}
            onClick={() => handleTypeClick(SessionActivityType.MONTH)}
          />
          <TypeButton
            title='1Y'
            selected={type === SessionActivityType.YEAR}
            onClick={() => handleTypeClick(SessionActivityType.YEAR)}
          />
        </div>
      </div>

      <div className='pt-5 h-80'>
        {!!activities.length && <BarChart data={chartData} />}

        {!activities.length && <Loader />}
      </div>
    </Card>
  );
};
