import cx from 'classnames';

interface HeaderCellProps {
  title: string;
  customStyles?: string;
}

export const HeaderCell = ({ title, customStyles }: HeaderCellProps) => {
  return (
    <div
      className={cx(
        'w-[inherit] px-4 py-3 text-xs text-gray-300 bg-gray-800 text-start font-normal',
        customStyles
      )}
    >
      {title}
    </div>
  );
};
