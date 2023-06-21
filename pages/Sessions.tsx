import { useEffect, useState } from 'react';
import { AnalysisCard } from '@/components/AnalysisCard';
import { Header } from '@/components/Header';
import { SessionActivity } from '@/components/SessionActivity';
import { SessionHistory } from '@/components/SessionHistory';
import { SideNavbar } from '@/components/SideNavbar';
import { Overview } from './api/sessions/overview';
import { Loader } from '@/components/Loader';

export const Sessions = () => {
  const [overview, setOverview] = useState<Overview>();

  const fetchSessionOverview = async () => {
    const overviewRes = await fetch('/api/sessions/overview');
    const parsedOverviewRes = (await overviewRes.json()) as Overview;

    setOverview(parsedOverviewRes);
  };

  useEffect(() => {
    fetchSessionOverview();
  }, []);

  return (
    <>
      {overview && (
        <div className='pb-10'>
          <Header
            instanceName={overview?.instanceName}
            instanceId={overview?.instanceId}
          />

          <div className='pt-10'>
            <div className='flex gap-10'>
              <SideNavbar
                country={overview?.address?.country}
                ipAddress={overview?.ipAddress}
              />

              <div className='flex flex-col gap-8'>
                <div className='pt-5 text-4xl'>Session History</div>

                <div className='flex gap-5'>
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
                </div>

                <SessionActivity />

                <SessionHistory />
              </div>
            </div>
          </div>
        </div>
      )}

      {!!!overview && (
        <div className='h-screen'>
          <Loader />
        </div>
      )}
    </>
  );
};
