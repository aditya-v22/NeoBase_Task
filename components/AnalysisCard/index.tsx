import cx from 'classnames';
import { Card } from '../Card';

export enum AnalysisStatus {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

interface AnalysisCardProps {
  title: string;
  status: AnalysisStatus;
  count: string;
  countPercentage: string;
}

export const AnalysisCard = ({
  title,
  status,
  count,
  countPercentage,
}: AnalysisCardProps) => {
  return (
    <Card>
      <div className='flex items-center justify-between gap-10'>
        <p className='text-md text-zinc-500'>{title}</p>
        <p
          className={cx('text-sm text-green-600', {
            'text-red-600': status === AnalysisStatus.DECREMENT,
          })}
        >
          {status === AnalysisStatus.INCREMENT ? '+' : '-'}
          {countPercentage}%
        </p>
      </div>

      <div className='pt-4 pb-6'>
        <p className='text-lg'>{count}</p>
      </div>
    </Card>
  );
};
