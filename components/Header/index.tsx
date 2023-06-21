import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='sticky top-0 bg-black z-10'>
      <div className='w-full flex justify-between items-center pt-10 pb-5 border-b border-zinc-800'>
        <div className='flex items-center gap-8'>
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            color='gray'
            size='3x'
            className='hover:opacity-80 cursor-pointer'
          />

          <p className='text-4xl'>Instance Name</p>
        </div>

        <div className='flex gap-5'>
          <div className='flex flex-col'>
            <p className='text-3xl'>Node Moniker</p>
            <p className='text-slate-500 text-sm'>21212323232322323232</p>
          </div>

          <div className='border-l border-gray-600' />

          <button className='px-16 py-4 bg-green-800 rounded-2xl hover:bg-green-700'>
            Start
          </button>
        </div>

        <Link href='/'>
          <Image
            src='/sentinel-logo.png'
            alt='Sentinel'
            height={50}
            width={200}
          />
        </Link>
      </div>
    </div>
  );
};
