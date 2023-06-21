import cx from 'classnames';
import { Chip } from '../Chip';

interface BodyCellProps {
  title: string;
  customStyles?: string;
}

interface ChipBodyCellProps extends BodyCellProps {
  chipCustomStyle?: string;
}

export const BodyCell = ({ title, customStyles }: BodyCellProps) => {
  return (
    <div
      className={cx(
        'w-[inherit] px-4 py-4 text-sm text-gray-400 text-start font-normal',
        customStyles
      )}
    >
      {title}
    </div>
  );
};

export const ChipBodyCell = ({
  title,
  customStyles,
  chipCustomStyle,
}: ChipBodyCellProps) => {
  return (
    <div
      className={cx(
        'w-[inherit] px-4 py-4 text-xs text-gray-400 text-start font-normal',
        customStyles
      )}
    >
      <Chip
        label={title}
        customStyles={chipCustomStyle}
      />
    </div>
  );
};
