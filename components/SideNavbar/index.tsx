import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faDatabase,
  faCodeFork,
  faClock,
  faPlus,
  faCircleDot,
} from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import { Card } from '../Card';

const navList = [
  {
    id: 'aa3fb118-2c14-4d46-9dd8-9f2217fdba8f',
    label: 'Node Overview',
    icon: faCodeFork,
    active: false,
  },
  {
    id: '7f8436e3-63e5-442f-be7b-a74a52ce01fa',
    label: 'DVPN Earnings',
    icon: faDatabase,
    active: false,
  },
  {
    id: '061bbaf2-e838-4490-9967-0f639e66e106',
    label: 'Session History',
    icon: faClock,
    active: true,
  },
  {
    id: '91ea2e8b-bd64-422a-86ef-044dc2a7e0eb',
    label: 'Subscription History',
    icon: faPlus,
    active: false,
  },
  {
    id: '3d5a35e4-98bd-4abf-ae47-24fcef6102b5',
    label: 'Bandwidth Usage',
    icon: faCircleDot,
    active: false,
  },
  {
    id: '98a26f58-b3af-49f5-8a21-63b23ac433f1',
    label: 'Edit Node Configuaration',
    icon: faCodeFork,
    active: false,
  },
];

interface SideNavbarProps {
  ipAddress: string;
  country: string;
}

export const SideNavbar = ({ ipAddress, country }: SideNavbarProps) => {
  const overviewOptions = [
    {
      id: '1878dace-3ae5-4082-8f46-5c672ae16b1e',
      label: 'IP Address',
      value: ipAddress,
    },
    {
      id: '346d6ff1-2195-4df9-9483-76fc797360a2',
      label: 'Country',
      value: country,
    },
  ];

  return (
    <div>
      <Card customStyles='px-4 py-6'>
        {overviewOptions.map((option) => (
          <div
            key={option.id}
            className='p-4 flex gap-4 border-b border-gray-700'
          >
            <p className='text-zinc-500 w-20'>{option.label}</p>
            <p className='text-zinc-500'>:</p>
            <p>{option.value}</p>
          </div>
        ))}

        <div className='pt-10'>
          <div className='flex flex-col gap-4'>
            {navList.map((list) => (
              <div
                key={list.id}
                className={cx(
                  'p-4 border rounded-2xl border-gray-700 bg-black-500 flex gap-10 justify-between items-center hover:border-gray-500 hover:cursor-pointer',
                  {
                    '!border-blue-500': list.active,
                  }
                )}
              >
                <div className='flex gap-5 items-center'>
                  <div className='h-8 w-8 flex justify-center items-center bg-blue-500 rounded-full'>
                    <FontAwesomeIcon
                      icon={list.icon}
                      size='sm'
                    />
                  </div>

                  <p className='text-zinc-500 font-medium'>{list.label}</p>
                </div>

                <FontAwesomeIcon
                  icon={faChevronRight}
                  color='gray'
                />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
