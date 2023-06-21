import { SessionActivity } from '@/components/SessionActivity';
import { SessionHistory } from '@/components/SessionHistory';
import { SessionOverview } from '@/components/SessionOverview';
import { NavbarWithHeader } from '../NavbarWithHeader';

export const Sessions = () => {
  return (
    <NavbarWithHeader>
      <div className='flex flex-col gap-8'>
        <div className='pt-5 text-4xl'>Session History</div>

        <SessionOverview />
        <SessionActivity />
        <SessionHistory />
      </div>
    </NavbarWithHeader>
  );
};
