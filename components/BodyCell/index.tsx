import cx from 'classnames';

interface BodyCellProps {
  title: string;
  customStyles?: string;
}

export const BodyCell = ({ title, customStyles }: BodyCellProps) => {
  return (
    <div
      className={cx(
        'w-[inherit] px-4 py-4 text-xs text-gray-400 text-start font-normal',
        customStyles
      )}
    >
      {title}
    </div>
  );
};
