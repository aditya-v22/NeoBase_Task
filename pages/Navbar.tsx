import { Header } from '@/components/Header';
import { SideNavbar } from '@/components/SideNavbar';
import React, { useEffect, useState } from 'react';
import { InstanceOverview } from './api/instances/overview';
import { Loader } from '@/components/Loader';

interface NavbarProps {
  children: React.ReactNode;
}

export const Navbar = ({ children }: NavbarProps) => {
  const [instanceOverview, setInstanceOverview] = useState<InstanceOverview>();

  const fetchInstanceOverview = async () => {
    const overviewRes = await fetch('/api/instances/overview');
    const parsedOverviewRes = (await overviewRes.json()) as InstanceOverview;

    setInstanceOverview(parsedOverviewRes);
  };

  useEffect(() => {
    fetchInstanceOverview();
  }, []);

  return (
    <>
      {!!instanceOverview && (
        <div className='pb-10'>
          <Header
            instanceName={instanceOverview?.instanceName}
            instanceId={instanceOverview?.instanceId}
          />

          <div className='pt-10'>
            <div className='flex gap-10'>
              <SideNavbar
                country={instanceOverview?.address?.country}
                ipAddress={instanceOverview?.ipAddress}
              />

              <div className='max-h-[calc(100vh-210px)] overflow-y-auto overflow-x-hidden scrollbar scrollbar-thumb-indigo-900 scrollbar-thumb-rounded scrollbar-w-1'>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}

      {!instanceOverview && (
        <div className='h-screen'>
          <Loader />
        </div>
      )}
    </>
  );
};
