import cx from 'classnames';

interface CardProps {
  children: React.ReactNode;
  customStyles?: string;
}

export const Card = ({ children, customStyles }: CardProps) => {
  return (
    <div
      className={cx(
        'px-4 py-3 bg-neutral-950 rounded-xl border border-zinc-800',
        customStyles
      )}
    >
      {children}
    </div>
  );
};
