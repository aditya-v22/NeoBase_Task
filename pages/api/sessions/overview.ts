import { AnalysisStatus } from '@/components/AnalysisCard';
import type { NextApiRequest, NextApiResponse } from 'next';

export interface SessionOverviewData {
  activeSessions: {
    status: AnalysisStatus;
    count: string;
    label: string;
  };
  totalSessions: {
    status: AnalysisStatus;
    count: string;
    label: string;
  };
  highestActiveSessions: {
    status: AnalysisStatus;
    count: string;
    label: string;
  };
  longestSession: {
    status: AnalysisStatus;
    count: string;
    label: string;
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SessionOverviewData>
) {
  const overview = {
    activeSessions: {
      status: AnalysisStatus.INCREMENT,
      count: '12.35',
      label: '10 H',
    },
    totalSessions: {
      status: AnalysisStatus.DECREMENT,
      count: '1.35',
      label: '100 H',
    },
    highestActiveSessions: {
      status: AnalysisStatus.INCREMENT,
      count: '21.35',
      label: '10 H',
    },
    longestSession: {
      status: AnalysisStatus.DECREMENT,
      count: '5.35',
      label: '12H : 13M : 2S',
    },
  };

  res.status(200).json(overview);
}
