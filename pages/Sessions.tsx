import { SessionActivity } from '@/components/SessionActivity';
import { SessionHistory } from '@/components/SessionHistory';
import { SessionOverview } from '@/components/SessionOverview';
import { Navbar } from './Navbar';

export const Sessions = () => {
  return (
    <Navbar>
      <div className='flex flex-col gap-8'>
        <div className='pt-5 text-4xl'>Session History</div>

        <SessionOverview />
        <SessionActivity />
        <SessionHistory />
      </div>
    </Navbar>
  );
};
