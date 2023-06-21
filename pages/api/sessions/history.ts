import type { NextApiRequest, NextApiResponse } from 'next';

export interface SessionHistoryData {
  startTime: string;
  date: string;
  duration: string;
  nodeUsed: string;
  dataConsumed: string;
  nodeLocation: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SessionHistoryData[]>
) {
  const history: SessionHistoryData[] = [
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

  res.status(200).json(history);
}
