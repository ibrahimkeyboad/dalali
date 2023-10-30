import { IconType } from 'react-icons';

interface CategoryProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

function CategoryInput({
  icon: Icon,
  label,
  onClick,
  selected,
}: CategoryProps) {
  return (
    <article
      onClick={() => onClick(label)}
      className={`
        flex
        flex-col
        overflow-hidden
        cursor-pointer
        border-2
        flex-wrap
        hover:border-black 
        transition 
        capitalize
        dark:hover:border-white 
        rounded-xl  
        p-4 
        gap-4
        ${
          selected
            ? 'border-black dark:border-white'
            : 'border-neutral-500 dark:text-gray-300'
        }`}>
      <Icon size={25} />
      <h4 className='font-semibold'>{label} </h4>
    </article>
  );
}

export default CategoryInput;
