import { SessionHistoryData } from '@/pages/api/sessions/history';
import { createColumnHelper } from '@tanstack/react-table';
import { BodyCell, ChipBodyCell } from '../BodyCell';
import { HeaderCell } from '../HeaderCell';

const columnHelper = createColumnHelper<SessionHistoryData>();

export const columns = [
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
    cell: (info) => {
      let chipStyle = 'min-w-[100px]';

      switch (info.getValue().toLowerCase()) {
        case 'wiregaurd':
          chipStyle = '';
          break;

        case 'v2ray':
          chipStyle = 'min-w-[100px] !bg-indigo-500';
          break;

        case 'openvpn':
          chipStyle = 'min-w-[100px] !bg-white !text-blue-500';
          break;
      }

      return (
        <ChipBodyCell
          title={info.getValue()}
          chipCustomStyle={chipStyle}
        />
      );
    },
    header: () => <HeaderCell title='Node Used' />,
    size: 180,
  }),
  columnHelper.accessor('dataConsumed', {
    cell: (info) => <BodyCell title={info.getValue()} />,
    header: () => <HeaderCell title='Data Consumed' />,
    size: 180,
  }),
  columnHelper.accessor('nodeLocation', {
    cell: (info) => <BodyCell title={info.getValue()} />,
    header: () => <HeaderCell title='Location of Node' />,
    size: 180,
  }),
];
