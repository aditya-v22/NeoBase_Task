import React, { useEffect, useState } from 'react';
import { AnalysisCard } from '../AnalysisCard';
import { SessionOverviewData } from '@/pages/api/sessions/overview';
import { Loader } from '../Loader';

export const SessionOverview = () => {
  const [overview, setOverview] = useState<SessionOverviewData>();

  const fetchSessionOverview = async () => {
    const overviewRes = await fetch('/api/sessions/overview');
    const parsedOverviewRes = (await overviewRes.json()) as SessionOverviewData;

    setOverview(parsedOverviewRes);
  };

  useEffect(() => {
    fetchSessionOverview();
  }, []);

  return (
    <div className='flex gap-5'>
      {!!overview && (
        <>
          <AnalysisCard
            label={overview?.activeSessions?.label}
            count={overview?.activeSessions?.count}
            status={overview?.activeSessions?.status}
            title='Active Sessions'
          />
          <AnalysisCard
            label={overview?.totalSessions?.label}
            count={overview?.totalSessions?.count}
            status={overview?.totalSessions?.status}
            title='Total Sessions'
          />
          <AnalysisCard
            label={overview?.highestActiveSessions?.label}
            count={overview?.highestActiveSessions?.count}
            status={overview?.highestActiveSessions?.status}
            title='Highest Active Sessions'
          />
          <AnalysisCard
            label={overview?.longestSession?.label}
            count={overview?.longestSession?.count}
            status={overview?.longestSession?.status}
            title='Longest Sessions'
          />
        </>
      )}

      {!overview && <Loader />}
    </div>
  );
};
