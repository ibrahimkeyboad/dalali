import { cn } from '@/lib/utils';

interface CategoryProps {
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

function CategoryInput({ label, onClick, selected }: CategoryProps) {
  return (
    <button
      onClick={() => onClick(label)}
      className={cn(
        'font-semibold border-2 w-[120px] rounded-xl border-gray-400 capitalize py-1 px-3',
        selected ? 'border-primary' : ''
      )}>
      {label}
    </button>
  );
}

export default CategoryInput;
