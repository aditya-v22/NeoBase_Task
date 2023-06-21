import type { NextApiRequest, NextApiResponse } from 'next';

export type SessionActivityData = number[];

export enum SessionActivityType {
  DAY = 'day',
  MONTH = 'month',
  YEAR = 'year',
}

const day: SessionActivityData = [
  15, 35, 35, 12, 57, 50, 34, 59, 42, 89, 43, 76,
];
const month: SessionActivityData = [
  25, 85, 54, 13, 32, 46, 23, 46, 69, 55, 34, 64,
];
const year: SessionActivityData = [
  30, 48, 23, 55, 75, 89, 25, 46, 85, 65, 80, 70,
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SessionActivityData>
) {
  let data: SessionActivityData = [];

  switch (req.query?.type) {
    case SessionActivityType.DAY:
      data = day;
      break;

    case SessionActivityType.MONTH:
      data = month;
      break;

    case SessionActivityType.YEAR:
      data = year;
      break;

    default:
      data = year;
      break;
  }

  res.status(200).json(data);
}
