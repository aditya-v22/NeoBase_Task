import { useEffect, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { SessionHistoryData } from '@/pages/api/sessions/history';
import { BodyCell } from '../BodyCell';
import { Card } from '../Card';
import { HeaderCell } from '../HeaderCell';
import { ReactTable } from '../ReactTable';
import { Loader } from '../Loader';

const columnHelper = createColumnHelper<SessionHistoryData>();

const columns = [
  columnHelper.accessor('startTime', {
    cell: (info) => <BodyCell title={info.getValue()} />,
    header: () => <HeaderCell title='Sessions Start Time' />,
    size: 200,
  }),
  columnHelper.accessor('date', {
    cell: (info) => <BodyCell title={info.getValue()} />,
    header: () => <HeaderCell title='Date' />,
  }),
  columnHelper.accessor('duration', {
    cell: (info) => <BodyCell title={info.getValue()} />,
    header: () => <HeaderCell title='Duration' />,
  }),
  columnHelper.accessor('nodeUsed', {
    cell: (info) => <BodyCell title={info.getValue()} />,
    header: () => <HeaderCell title='Node Used' />,
    size: 180,
  }),
  columnHelper.accessor('dataConsumed', {
    cell: (info) => <BodyCell title={info.getValue()} />,
    header: () => <HeaderCell title='Data Consumed' />,
    size: 200,
  }),
  columnHelper.accessor('nodeLocation', {
    cell: (info) => <BodyCell title={info.getValue()} />,
    header: () => <HeaderCell title='Location of Node' />,
    size: 180,
  }),
];

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
