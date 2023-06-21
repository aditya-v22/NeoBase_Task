import { AnalysisStatus } from '@/components/AnalysisCard';
import type { NextApiRequest, NextApiResponse } from 'next';

export interface Overview {
  instanceName: string;
  instanceId: string;
  ipAddress: string;
  address: {
    country: string;
  };
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
  res: NextApiResponse<Overview>
) {
  const overview = {
    instanceName: 'Node Moniker',
    instanceId: '23424242344242342424242',
    ipAddress: '136.251.15.107',
    address: {
      country: 'Canada',
    },
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
