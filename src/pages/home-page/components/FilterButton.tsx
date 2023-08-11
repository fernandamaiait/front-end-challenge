import { MouseEventHandler } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

interface IFilterButtonProps {
  text: string;
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function FilterButton({ text, selected, onClick }: IFilterButtonProps) {
  return (
    <button
      className={`px-4 sm:py-2 py-[6px] rounded font-roboto text-sm font-bold leading-none ${
        selected ? 'bg-tertiary text-on-tertiary' : 'bg-surface text-on-surface-var'
      }`}
      onClick={onClick}>
      <div className="flex gap-2 items-center justify-center">
        {text}
        {selected && <IoMdCloseCircle className="text-on-tertiary" size={20} />}
      </div>
    </button>
  );
}
