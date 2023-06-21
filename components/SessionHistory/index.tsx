import { useEffect, useState } from 'react';
import { SessionHistoryData } from '@/pages/api/sessions/history';
import { Card } from '../Card';
import { ReactTable } from '../ReactTable';
import { Loader } from '../Loader';
import { columns } from './columns';

export const SessionHistory = () => {
  const [histories, setHistories] = useState<SessionHistoryData[]>([]);

  const fetchSessionHistory = async () => {
    const historyRes = await fetch('/api/sessions/history');
    const parsedHistoryRes = (await historyRes.json()) as SessionHistoryData[];

    setHistories(parsedHistoryRes);
  };

  useEffect(() => {
    fetchSessionHistory();
  }, []);

  return (
    <Card customStyles='!px-0'>
      <p className='text-4xl px-4'>Session History</p>

      <div className='pt-5'>
        {!!histories.length && (
          <ReactTable
            data={histories}
            columns={columns}
          />
        )}

        {!histories.length && <Loader />}
      </div>
    </Card>
  );
};
