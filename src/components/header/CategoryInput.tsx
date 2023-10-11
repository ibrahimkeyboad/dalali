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
        grid 
        border-2
        hover:border-black 
        transition c
        ursor-pointer 
        dark:hover:border-white 
        rounded-xl  
        p-6 
        gap-3 
        py-3
        ${selected ? 'border-black dark:border-white' : 'border-neutral-500'}`}>
      <Icon size={30} />
      <h4 className='font-semibold'>{label} </h4>
    </article>
  );
}

export default CategoryInput;
