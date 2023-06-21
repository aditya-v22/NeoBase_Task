import type { NextApiRequest, NextApiResponse } from 'next';

export interface InstanceOverview {
  instanceName: string;
  instanceId: string;
  ipAddress: string;
  address: {
    country: string;
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<InstanceOverview>
) {
  const overview = {
    instanceName: 'Node Moniker',
    instanceId: '23424242344242342424242',
    ipAddress: '136.251.15.107',
    address: {
      country: 'Canada',
    },
  };

  res.status(200).json(overview);
}
