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
      onClick={(event) => {
        event.stopPropagation();
        onClick(label);
      }}
      className={`
        grid 
        cursor-pointer
        border-2
        hover:border-black 
        transition 
        capitalize
        dark:hover:border-white 
        rounded-xl  
        p-4 
        gap-3 
        ${
          selected
            ? 'border-black dark:border-white'
            : 'border-neutral-500 text-gray-300'
        }`}>
      <Icon size={25} />
      <h4 className='font-semibold'>{label} </h4>
    </article>
  );
}

export default CategoryInput;
