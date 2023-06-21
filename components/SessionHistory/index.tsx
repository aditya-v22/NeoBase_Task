import { createColumnHelper } from '@tanstack/react-table';
import { BodyCell } from '../BodyCell';
import { Card } from '../Card';
import { HeaderCell } from '../HeaderCell';
import { ReactTable } from '../ReactTable';

interface SessionHistoryData {
  startTime: string;
  date: string;
  duration: string;
  nodeUsed: string;
  dataConsumed: string;
  nodeLocation: string;
}

const defaultData: SessionHistoryData[] = [
  {
    dataConsumed: '50MB',
    date: '27-07-2023',
    duration: '2.35sec',
    nodeLocation: 'Singapore',
    nodeUsed: 'Wireguard',
    startTime: '11:42:23',
  },
  {
    dataConsumed: '50MB',
    date: '27-07-2023',
    duration: '2.35sec',
    nodeLocation: 'Singapore',
    nodeUsed: 'Wireguard',
    startTime: '11:42:23',
  },
  {
    dataConsumed: '50MB',
    date: '27-07-2023',
    duration: '2.35sec',
    nodeLocation: 'Singapore',
    nodeUsed: 'Wireguard',
    startTime: '11:42:23',
  },
];

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
  return (
    <Card customStyles='!px-0'>
      <p className='text-4xl px-4'>Session History</p>

      <div className='pt-5'>
        <ReactTable
          data={defaultData}
          columns={columns}
        />
      </div>
    </Card>
  );
};
