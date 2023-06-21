import cx from 'classnames';

interface ChipProps {
  label: string;
  customStyles?: string;
}

export const Chip = ({ label, customStyles }: ChipProps) => {
  return (
    <div
      className={cx(
        'w-[fit-content] px-2 py-1 bg-blue-600 text-white text-sm text-center',
        customStyles
      )}
    >
      {label}
    </div>
  );
};
